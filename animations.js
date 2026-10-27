(function () {
  // ---------- Nav scroll state ----------
  var nav = document.querySelector('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile menu ----------
  window.toggleMenu = function () {
    var m = document.getElementById('mobile-menu');
    if (!m) return;
    m.classList.toggle('open');
    document.body.classList.toggle('menu-open', m.classList.contains('open'));
  };

  // ---------- Nav dropdown (tap-to-toggle, desktop also gets CSS hover) ----------
  document.querySelectorAll('.nav-dropdown > a').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = trigger.parentElement;
      var wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) { d.classList.remove('open'); });
      if (!wasOpen) parent.classList.add('open');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
      if (!d.contains(e.target)) d.classList.remove('open');
    });
  });

  // ---------- Hero load-in ----------
  var hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(function () {
      setTimeout(function () { hero.classList.add('loaded'); }, 80);
    });
  }

  // ---------- Scroll reveal (IntersectionObserver) ----------
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    // stagger index within each group
    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
      var children = group.querySelectorAll('[data-reveal]');
      children.forEach(function (el, i) { el.style.setProperty('--i', i); });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------- Animated counters ----------
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
    var duration = 1600;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.closest('.faq-list').querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // ---------- Hero parallax (subtle, scroll-linked) ----------
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = 'translateY(' + (y * 0.15) + 'px)';
      }
    }, { passive: true });
  }

  // ---------- Magnetic buttons ----------
  document.querySelectorAll('.btn-gold, .btn-dark').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.08) + 'px,' + (y * 0.25 - 3) + 'px)';
    });
    btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
  });

  // ---------- Formspree-style lead form success state ----------
  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var action = form.getAttribute('action');
      fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (res.ok) form.classList.add('success');
          else throw new Error('bad response');
        })
        .catch(function () {
          var err = form.querySelector('.lead-form-error');
          if (err) err.style.display = 'block';
        });
    });
  });
})();
