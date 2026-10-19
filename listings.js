(function () {
  'use strict';

  var PER_PAGE = 12;
  var _allListings = [];
  var _filters = { type: 'all' };
  var _page = 1;

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
    var unit = l.UnitNumber ? 'Unit ' + l.UnitNumber + ' — ' : '';
    var addr = (unit + (l.StreetNumber || '') + ' ' + (l.StreetName || '') + ' ' + (l.StreetSuffix || '')).trim();
    var region = l.CityRegion || 'West Kelowna';
    var dom = daysOnMarket(l.OriginalEntryTimestamp);
    var mls = l.ListingId ? 'MLS® ' + l.ListingId : '';
    var typeLabel = propTypeLabel(l);
    var imgHtml = photo
      ? '<img src="' + photo.replace(/"/g, '&quot;') + '" alt="' + addr.replace(/"/g, '&quot;') + '" loading="lazy">'
      : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px;background:var(--cream-deep)">No Photo Available</div>';
    var key = l.ListingKey || l.ListingId;

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
        (mls ? '<div style="margin-top:12px;font-size:12px;color:var(--muted)">' + mls + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  function applyFilters(listings) {
    return listings.filter(function (l) {
      if (_filters.type !== 'all') {
        var pt = structureType(l).toLowerCase();
        if (!pt.includes(_filters.type.toLowerCase())) return false;
      }
      return true;
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
      card.addEventListener('click', function () {
        window.location.href = '/contact';
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

  function loadListings() {
    var container = document.getElementById('listings-container');
    if (!container) return;

    fetch('/api/listings')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.configured) { container.innerHTML = ''; return; }
        if (data.error) {
          container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">Could not load listings right now. <a href="/contact">Contact us</a> for current availability.</p>';
          return;
        }
        _allListings = data.listings || [];
        if (_allListings.length === 0) {
          container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">No active listings right now. <a href="/contact">Contact us</a> to get notified when something hits the market.</p>';
          return;
        }
        renderInto('listings-container', 'listings-pagination', _allListings, 'No active listings right now.');

        var disc = document.getElementById('listings-disclaimer');
        if (disc) {
          disc.style.display = 'block';
          disc.innerHTML = 'Not all listings appear here — participation in CREA\'s data sharing program varies by brokerage. We also have access to <strong>off-market opportunities</strong> not yet on MLS&reg;. <a href="/contact">Contact us for the full picture &rarr;</a>';
        }
      })
      .catch(function () {
        container.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--muted)">Could not load listings. <a href="/contact">Contact us</a> directly.</p>';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadListings);
  } else {
    loadListings();
  }
})();
