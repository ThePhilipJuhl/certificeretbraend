/* ============================================================
   Nemingeniør — Certificeret Brandrådgiver
   One-pager interactions
   ============================================================ */
(function () {
  'use strict';

  I18n.init();

  var t = I18n.t;

  /* ---------- Header background on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Collapsible contact card ---------- */
  var contactCard = document.getElementById('kontakt');
  var contactToggle = document.getElementById('contactToggle');
  if (contactCard && contactToggle) {
    var setContactOpen = function (open) {
      contactCard.classList.toggle('open', open);
      contactToggle.setAttribute('aria-expanded', String(open));
    };

    contactToggle.addEventListener('click', function () {
      setContactOpen(!contactCard.classList.contains('open'));
    });

    // close when clicking outside the card
    document.addEventListener('click', function (e) {
      if (contactCard.classList.contains('open') && !contactCard.contains(e.target)) {
        setContactOpen(false);
      }
    });

    // close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setContactOpen(false);
    });

    // "Kontakt os" links + the "Book nu" tab open the form
    document.querySelectorAll('a[href="#kontakt"]').forEach(function (a) {
      a.addEventListener('click', function () { setContactOpen(true); });
    });
    var bookTab = document.querySelector('.hero-tabs .tab');
    if (bookTab) bookTab.addEventListener('click', function () { setContactOpen(true); });
  }

  /* ---------- Generic single-select tab groups ---------- */
  function singleSelect(container, selector) {
    var tabs = container.querySelectorAll(selector);
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
      });
    });
  }
  document.querySelectorAll('.hero-tabs').forEach(function (g) { singleSelect(g, '.tab'); });
  document.querySelectorAll('.filter-tabs').forEach(function (g) { singleSelect(g, '.filter-tab'); });

  /* ---------- Reference cards ---------- */
  var heartSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>';

  function cardTemplate() {
    return '' +
      '<article class="card">' +
        '<div class="card-head">' +
          '<h3>' + t('refs.card.title') + '</h3>' +
          '<button class="heart" aria-label="' + t('refs.card.fav') + '">' + heartSvg + '</button>' +
        '</div>' +
        '<div class="placeholder card-thumb" aria-hidden="true"></div>' +
        '<div class="card-foot">' +
          '<span class="card-price">' + t('refs.card.price') + '</span>' +
          '<button class="btn btn-dark">' + t('refs.card.book') + '</button>' +
        '</div>' +
      '</article>';
  }

  var cardGrid = document.getElementById('cardGrid');
  var showMore = document.getElementById('showMore');
  var cardsExpanded = false;

  function addCards(n) {
    if (!cardGrid) return;
    var html = '';
    for (var i = 0; i < n; i++) html += cardTemplate();
    cardGrid.insertAdjacentHTML('beforeend', html);
  }

  function refreshCards() {
    if (!cardGrid) return;
    var count = cardGrid.querySelectorAll('.card').length || 8;
    cardGrid.innerHTML = '';
    addCards(count);
  }

  function updateShowMoreLabel() {
    if (!showMore) return;
    showMore.textContent = t(cardsExpanded ? 'refs.showLess' : 'refs.showMore');
  }
  addCards(8);

  if (cardGrid) {
    cardGrid.addEventListener('click', function (e) {
      var heart = e.target.closest('.heart');
      if (heart) heart.classList.toggle('liked');
    });
  }
  if (showMore) {
    showMore.addEventListener('click', function () {
      if (!cardsExpanded) {
        addCards(4);
        cardsExpanded = true;
      } else {
        var cards = cardGrid.querySelectorAll('.card');
        for (var i = cards.length - 1; i >= 8; i--) cards[i].remove();
        cardsExpanded = false;
      }
      updateShowMoreLabel();
    });
  }

  /* ---------- Testimonials carousel ---------- */
  var testimonialData = [
    { name: 'Vivoh Robert', rating: '4.5', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' },
    { name: 'Maria Holm', rating: '5.0', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation.' },
    { name: 'Jonas Berg', rating: '4.8', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit voluptate.' },
    { name: 'Sofie Lind', rating: '4.7', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.' },
    { name: 'Anders Kjær', rating: '4.9', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit.' },
    { name: 'Emma Dahl', rating: '5.0', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum.' }
  ];

  var star = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z"/></svg>';

  function testimonialCard(tData, index) {
    var role = I18n.getTestimonialRole(index);
    return '' +
      '<article class="testimonial">' +
        '<div class="testimonial-head">' +
          '<div class="avatar" aria-hidden="true"></div>' +
          '<div class="meta">' +
            '<div class="name">' + tData.name + '</div>' +
            '<div class="role">' + role + '</div>' +
          '</div>' +
          '<div class="rating">' + star + tData.rating + '</div>' +
        '</div>' +
        '<p>"' + tData.text + '"</p>' +
      '</article>';
  }

  var testimonialsEl = document.getElementById('testimonials');
  var dotsEl = document.getElementById('dots');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');

  function perPage() { return window.innerWidth <= 980 ? 1 : 3; }
  var page = 0;

  function pageCount() { return Math.max(1, Math.ceil(testimonialData.length / perPage())); }

  function renderTestimonials() {
    if (!testimonialsEl) return;
    var pp = perPage();
    page = Math.min(page, pageCount() - 1);
    var start = page * pp;
    var slice = testimonialData.slice(start, start + pp);
    testimonialsEl.style.opacity = '0';
    setTimeout(function () {
      testimonialsEl.innerHTML = slice.map(function (item, i) {
        return testimonialCard(item, start + i);
      }).join('');
      testimonialsEl.style.opacity = '1';
    }, 120);

    if (dotsEl) {
      var dots = '';
      for (var i = 0; i < pageCount(); i++) {
        dots += '<button class="dot' + (i === page ? ' is-active' : '') +
          '" aria-label="' + t('testimonials.page') + ' ' + (i + 1) + '" data-page="' + i + '"></button>';
      }
      dotsEl.innerHTML = dots;
    }
  }

  if (dotsEl) {
    dotsEl.addEventListener('click', function (e) {
      var dot = e.target.closest('.dot');
      if (!dot) return;
      page = parseInt(dot.getAttribute('data-page'), 10);
      renderTestimonials();
    });
  }
  if (prevBtn) prevBtn.addEventListener('click', function () {
    page = (page - 1 + pageCount()) % pageCount();
    renderTestimonials();
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    page = (page + 1) % pageCount();
    renderTestimonials();
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderTestimonials, 150);
  });
  renderTestimonials();

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var success = document.getElementById('formSuccess');

    function setError(name, msg) {
      var field = form.querySelector('[name="' + name + '"]');
      var errEl = form.querySelector('.error[data-for="' + name + '"]');
      if (errEl) errEl.textContent = msg || '';
      if (field && field.classList) field.classList.toggle('invalid', !!msg);
      return !msg;
    }

    function validate() {
      var ok = true;
      var data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
        consent: form.consent.checked
      };

      ok = setError('name', data.name ? '' : t('form.error.name')) && ok;

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      ok = setError('email', emailOk ? '' : t('form.error.email')) && ok;

      // phone optional, but if filled must look phone-ish
      if (data.phone && !/^[+\d][\d\s().-]{5,}$/.test(data.phone)) {
        ok = setError('phone', t('form.error.phone')) && ok;
      } else {
        setError('phone', '');
      }

      ok = setError('message', data.message.length >= 5 ? '' : t('form.error.message')) && ok;
      ok = setError('consent', data.consent ? '' : t('form.error.consent')) && ok;

      return ok ? data : null;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = validate();
      if (!data) {
        if (success) success.hidden = true;
        var firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // No backend wired up — log and show a success state.
      console.log('Kontaktformular indsendt:', data);
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    });

    // clear an error as the user fixes the field
    form.addEventListener('input', function (e) {
      if (e.target.name) setError(e.target.name, '');
    });
  }

  I18n.onChange(function () {
    refreshCards();
    updateShowMoreLabel();
    renderTestimonials();
  });
})();
