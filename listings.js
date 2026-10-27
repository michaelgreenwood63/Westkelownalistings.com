(function () {
  'use strict';

  var PER_PAGE = 12;
  var _allListings = [];
  var _filters = { type: 'all', minPrice: 0, maxPrice: Infinity, minBeds: 0, minBaths: 0 };
  var _page = 1;

  function parsePriceInput(str) {
    var n = parseFloat(String(str || '').replace(/[^0-9.]/g, ''));
    return isFinite(n) ? n : null;
  }

  function formatPrice(price) {
    if (!price) return 'Price on Request';
    return '$' + Number(price).toLocaleString('en-CA', { maximumFractionDigits: 0 });
  }

  function mainPhotoUrl(listing) {
    var media = listing.Media;
    if (!media || !media.length) return null;
    return media[0].MediaURL || null;
  }

  function structureType(l) {
    var s = l.StructureType;
    return (Array.isArray(s) ? s[0] : s) || l.PropertySubType || '';
  }

  function propTypeLabel(l) {
    var t = structureType(l).toLowerCase();
    if (t.includes('apartment')) return 'Condo';
    if (t.includes('row') || t.includes('townhouse')) return 'Townhome';
    if (t.includes('manufactured')) return 'Mobile Home';
    if (t.includes('duplex')) return 'Duplex';
    if (t.includes('house')) return 'House';
    return structureType(l) || 'Home';
  }

  function daysOnMarket(dateStr) {
    if (!dateStr) return null;
    var d = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
    if (d <= 0) return 'Listed today';
    if (d === 1) return '1 day on market';
    return d + ' days on market';
  }

  function renderCard(l) {
    var photo = mainPhotoUrl(l);
    var unit = l.UnitNumber ? 'Unit ' + l.UnitNumber + ', ' : '';
    var addr = (unit + (l.StreetNumber || '') + ' ' + (l.StreetName || '') + ' ' + (l.StreetSuffix || '')).trim();
    var region = l.CityRegion || 'West Kelowna';
    var dom = daysOnMarket(l.OriginalEntryTimestamp);
    var mls = l.ListingId ? 'MLS® ' + l.ListingId : '';
    var typeLabel = propTypeLabel(l);
    var imgHtml = photo
      ? '<img src="' + photo.replace(/"/g, '&quot;') + '" alt="' + addr.replace(/"/g, '&quot;') + '" loading="lazy">'
      : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px;background:var(--cream-deep)">No Photo Available</div>';
    var key = l.ListingKey || l.ListingId;
    var detailUrl = '/listing?id=' + encodeURIComponent(key);

    return '<div class="listing-card" data-key="' + key + '" data-proptype="' + structureType(l) + '" style="cursor:pointer">' +
      '<div class="listing-img">' + imgHtml +
        '<span class="listing-badge">' + typeLabel + '</span>' +
        '<div class="listing-price">' + formatPrice(l.ListPrice) + '</div>' +
      '</div>' +
      '<div class="listing-body">' +
        '<div class="listing-addr">' + (addr || 'Address on request') + '</div>' +
        '<div class="listing-loc">' + region + ', West Kelowna, BC' + (dom ? ' &middot; ' + dom : '') + '</div>' +
        '<div class="listing-specs">' +
          (l.BedroomsTotal ? '<div class="listing-spec"><strong>' + l.BedroomsTotal + '</strong> Beds</div>' : '') +
          (l.BathroomsTotalInteger ? '<div class="listing-spec"><strong>' + l.BathroomsTotalInteger + '</strong> Baths</div>' : '') +
          (l.LivingArea ? '<div class="listing-spec"><strong>' + Math.round(l.LivingArea).toLocaleString() + '</strong> Sq Ft</div>' : '') +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:10px">' +
          (mls ? '<span style="font-size:12px;color:var(--muted)">' + mls + '</span>' : '<span></span>') +
          '<a href="' + detailUrl + '" onclick="event.stopPropagation()" style="font-size:13px;font-weight:700;color:var(--gold-dark);white-space:nowrap">View Listing &rarr;</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function matchesTypeFilter(l, filterType) {
    if (filterType === 'all') return true;
    var st = structureType(l).toLowerCase();
    switch (filterType) {
      case 'house': return st.indexOf('single family') !== -1 || (st.indexOf('house') !== -1 && st.indexOf('town') === -1);
      case 'apartment': return st.indexOf('apartment') !== -1;
      case 'row': return st.indexOf('row') !== -1 || st.indexOf('town') !== -1;
      case 'manufactured': return st.indexOf('manufactured') !== -1;
      case 'duplex': return st.indexOf('duplex') !== -1;
      default: return true;
    }
  }

  function applyFilters(listings) {
    return listings.filter(function (l) {
      if (!matchesTypeFilter(l, _filters.type)) return false;
      var price = l.ListPrice || 0;
      if (price < _filters.minPrice) return false;
      if (price > _filters.maxPrice) return false;
      if ((l.BedroomsTotal || 0) < _filters.minBeds) return false;
      if ((l.BathroomsTotalInteger || 0) < _filters.minBaths) return false;
      return true;
    });
  }

  function initFilterBar() {
    var typeEl = document.getElementById('f-type');
    var bedsEl = document.getElementById('f-beds');
    var bathsEl = document.getElementById('f-baths');
    var minEl = document.getElementById('f-price-min');
    var maxEl = document.getElementById('f-price-max');
    var resetEl = document.getElementById('f-reset');
    if (!typeEl && !bedsEl && !bathsEl && !minEl && !maxEl) return;

    var debounceTimer = null;

    function refresh() {
      _page = 1;
      renderInto('listings-container', 'listings-pagination', _allListings, 'No active listings match these filters.');
    }

    function refreshDebounced() {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        debounceTimer = null;
        refresh();
      }, 500);
    }

    if (typeEl) typeEl.addEventListener('change', function () {
      _filters.type = typeEl.value;
      refresh();
    });
    if (bedsEl) bedsEl.addEventListener('change', function () {
      _filters.minBeds = parseInt(bedsEl.value, 10) || 0;
      refresh();
    });
    if (bathsEl) bathsEl.addEventListener('change', function () {
      _filters.minBaths = parseInt(bathsEl.value, 10) || 0;
      refresh();
    });
    // Price inputs: debounced on every keystroke (so typing "800000" doesn't
    // momentarily filter against maxPrice=8, then 80, then 800...), plus an
    // immediate apply on blur/Enter so leaving the field never leaves a
    // pending, not-yet-applied value.
    if (minEl) minEl.addEventListener('input', function () {
      var v = parsePriceInput(minEl.value);
      _filters.minPrice = v === null ? 0 : v;
      refreshDebounced();
    });
    if (maxEl) maxEl.addEventListener('input', function () {
      var v = parsePriceInput(maxEl.value);
      _filters.maxPrice = v === null ? Infinity : v;
      refreshDebounced();
    });
    [minEl, maxEl].forEach(function (el) {
      if (!el) return;
      el.addEventListener('blur', function () { if (debounceTimer) { clearTimeout(debounceTimer); debounceTimer = null; refresh(); } });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { if (debounceTimer) { clearTimeout(debounceTimer); debounceTimer = null; } refresh(); el.blur(); }
      });
    });
    if (resetEl) resetEl.addEventListener('click', function () {
      if (debounceTimer) { clearTimeout(debounceTimer); debounceTimer = null; }
      _filters = { type: 'all', minPrice: 0, maxPrice: Infinity, minBeds: 0, minBaths: 0 };
      if (typeEl) typeEl.value = 'all';
      if (bedsEl) bedsEl.value = '0';
      if (bathsEl) bathsEl.value = '0';
      if (minEl) minEl.value = '';
      if (maxEl) maxEl.value = '';
      refresh();
    });
  }

  function renderInto(containerId, paginationId, listings, emptyMessage) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var filtered = applyFilters(listings);
    var total = filtered.length;
    var totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
    if (_page > totalPages) _page = totalPages;

    if (total === 0) {
      container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">' + emptyMessage + '</p>';
      if (paginationId) { var pEl = document.getElementById(paginationId); if (pEl) pEl.innerHTML = ''; }
      return;
    }

    var start = (_page - 1) * PER_PAGE;
    var pageListings = filtered.slice(start, start + PER_PAGE);
    container.innerHTML = pageListings.map(renderCard).join('');

    container.querySelectorAll('.listing-card[data-key]').forEach(function (card) {
      var key = card.getAttribute('data-key');
      if (!key) return;
      card.addEventListener('click', function () {
        window.location.href = '/listing?id=' + encodeURIComponent(key);
      });
    });

    if (paginationId) {
      var pagEl = document.getElementById(paginationId);
      if (pagEl && totalPages > 1) {
        pagEl.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:32px">' +
            '<button class="btn btn-outline-dark" style="padding:10px 20px"' + (_page <= 1 ? ' disabled style="opacity:.4"' : ' onclick="window.__wkListingsGoPage(' + (_page - 1) + ')"') + '>&larr; Prev</button>' +
            '<span style="font-size:14px;color:var(--muted)">Page ' + _page + ' of ' + totalPages + '</span>' +
            '<button class="btn btn-outline-dark" style="padding:10px 20px"' + (_page >= totalPages ? ' disabled style="opacity:.4"' : ' onclick="window.__wkListingsGoPage(' + (_page + 1) + ')"') + '>Next &rarr;</button>' +
          '</div>';
      } else if (pagEl) {
        pagEl.innerHTML = '';
      }
    }
  }

  window.__wkListingsGoPage = function (n) {
    _page = n;
    renderInto('listings-container', 'listings-pagination', _allListings, 'No active listings right now.');
    var anchor = document.getElementById('listings');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // "Our Listings" — Mark Jontz & Associates' own listings, pulled from the
  // same shared hub feed every ownX/westkelownalistings page already uses
  // (ListAgentFullName is already selected server-side, no API changes
  // needed — see memory on the agent-filter incident before touching the
  // hub's $select list). Client-side only; section stays hidden if empty.
  var OUR_AGENTS = ['Mark Jontz', 'Michael Greenwood'];

  function renderOurListings(listings) {
    var section = document.getElementById('our-listings');
    var container = document.getElementById('our-listings-container');
    if (!section || !container) return;

    var mine = listings.filter(function (l) { return OUR_AGENTS.indexOf(l.ListAgentFullName) !== -1; });

    // De-dupe by ListingKey, then defensively by address+price (seen before:
    // the same physical listing appearing twice under two MLS numbers).
    var seenKeys = {}, seenAddr = {}, deduped = [];
    mine.sort(function (a, b) { return new Date(b.OriginalEntryTimestamp || 0) - new Date(a.OriginalEntryTimestamp || 0); });
    mine.forEach(function (l) {
      var key = l.ListingKey;
      var unit = l.UnitNumber ? 'Unit ' + l.UnitNumber + ', ' : '';
      var addr = (unit + (l.StreetNumber || '') + ' ' + (l.StreetName || '') + ' ' + (l.StreetSuffix || '')).trim();
      var addrKey = addr.toLowerCase() + '|' + l.ListPrice;
      if (seenKeys[key] || seenAddr[addrKey]) return;
      seenKeys[key] = true;
      seenAddr[addrKey] = true;
      deduped.push(l);
    });

    if (!deduped.length) { section.style.display = 'none'; return; }
    container.innerHTML = deduped.map(renderCard).join('');
    container.querySelectorAll('.listing-card[data-key]').forEach(function (card) {
      var key = card.getAttribute('data-key');
      if (!key) return;
      card.addEventListener('click', function () { window.location.href = '/listing?id=' + encodeURIComponent(key); });
    });
    section.style.display = '';
  }

  // Per-building pages (strata complex pages). A page sets, before this
  // script loads:
  //   window.BUILDING_FILTER = { name: "...", addresses: [{num:"3645", words:["gosset"]}] }
  // `num` must exactly match StreetNumber; `words` are lowercase tokens that
  // must ALL appear in StreetName+StreetSuffix. Supports multiple accepted
  // number/word combos per building (secondary civic addresses). Same proven
  // pattern as kelownamanufactured.com's window.PARK_FILTER — do not deviate
  // from it without a reason, it's been tested against real MLS quirks.
  function matchesBuildingFilter(l) {
    if (!window.BUILDING_FILTER) return false;
    var num = (l.StreetNumber || '').toString();
    var nameStr = ((l.StreetName || '') + ' ' + (l.StreetSuffix || '')).toLowerCase();
    return window.BUILDING_FILTER.addresses.some(function (entry) {
      if (entry.num !== num) return false;
      return entry.words.every(function (w) { return nameStr.indexOf(w) !== -1; });
    });
  }

  function renderBuildingListings(listings) {
    if (!window.BUILDING_FILTER) return;
    var container = document.getElementById('building-listings-container');
    var emptyEl = document.getElementById('building-listings-empty');
    if (!container) return;

    var mine = listings.filter(matchesBuildingFilter);
    mine.sort(function (a, b) { return new Date(b.OriginalEntryTimestamp || 0) - new Date(a.OriginalEntryTimestamp || 0); });

    if (!mine.length) {
      container.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    container.innerHTML = mine.map(renderCard).join('');
    container.querySelectorAll('.listing-card[data-key]').forEach(function (card) {
      var key = card.getAttribute('data-key');
      if (!key) return;
      card.addEventListener('click', function () { window.location.href = '/listing?id=' + encodeURIComponent(key); });
    });
  }

  function loadListings() {
    var container = document.getElementById('listings-container');
    var hasOtherConsumer = document.getElementById('our-listings-container') || document.getElementById('building-listings-container');
    if (!container && !hasOtherConsumer) return;

    var area = window.__WK_AREA;
    var endpoint = area ? '/api/listings?area=' + encodeURIComponent(area) : '/api/listings';

    fetch(endpoint)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.configured) { if (container) container.innerHTML = ''; return; }
        if (data.error) {
          if (container) container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">Could not load listings right now. <a href="/contact">Contact us</a> for current availability.</p>';
          return;
        }
        _allListings = data.listings || [];
        renderOurListings(_allListings);
        renderBuildingListings(_allListings);
        if (!container) return;
        if (_allListings.length === 0) {
          container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">No active listings right now. <a href="/contact">Contact us</a> to get notified when something hits the market.</p>';
          return;
        }
        renderInto('listings-container', 'listings-pagination', _allListings, 'No active listings right now.');

        var disc = document.getElementById('listings-disclaimer');
        if (disc) {
          disc.style.display = 'block';
          disc.innerHTML = 'Not all listings appear here. Participation in CREA\'s data sharing program varies by brokerage. We also have access to <strong>off-market opportunities</strong> not yet on MLS&reg;. <a href="/contact">Contact us for the full picture &rarr;</a>';
        }
      })
      .catch(function () {
        if (container) container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">Could not load listings. <a href="/contact">Contact us</a> directly.</p>';
      });
  }

  function init() {
    initFilterBar();
    loadListings();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
