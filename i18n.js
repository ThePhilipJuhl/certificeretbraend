/* ============================================================
   i18n — Danish / English translations
   ============================================================ */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'cb-lang';

  var strings = {
  da: {
    'meta.title': 'Nemingeniør — Certificeret Brandrådgiver',
    'meta.description': 'Nemingeniør — certificeret brandrådgiver. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'lang.aria': 'Vælg sprog',
    'nav.aria': 'Hovedmenu',
    'nav.home': 'Forside',
    'nav.about': 'En del af Nemingeniør',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.search': 'Søg',
    'nav.open': 'Åbn menu',
    'brand.name': 'Certificeret<br />Brandrådgiver',
    'brand.sub': 'En del af Nemingeniør',
    'hero.eyebrow': 'Neque porro quisquam est qui dolorem ipsum quia.',
    'hero.title': 'Certificeret Brandrådgiver',
    'hero.lead': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    'hero.tab.book': 'Book nu',
    'hero.tab.refs': 'Se referencer',
    'form.title': 'Kontakt os',
    'form.name': 'Navn',
    'form.name.placeholder': 'Dit fulde navn',
    'form.email': 'Email',
    'form.email.placeholder': 'din@email.dk',
    'form.phone': 'Telefon',
    'form.message': 'Besked',
    'form.message.placeholder': 'Lorem ipsum dolor sit amet…',
    'form.consent': 'Jeg accepterer, at mine oplysninger må behandles. <em>Lorem ipsum dolor.</em>',
    'form.submit': 'Send besked',
    'form.success': '✓ Tak! Din besked er sendt. Vi vender tilbage hurtigst muligt.',
    'form.error.name': 'Indtast venligst dit navn.',
    'form.error.email': 'Indtast en gyldig email-adresse.',
    'form.error.phone': 'Indtast et gyldigt telefonnummer.',
    'form.error.message': 'Skriv en kort besked (min. 5 tegn).',
    'form.error.consent': 'Du skal acceptere betingelserne.',
    'process.title': 'Lorem Ipsum passage',
    'process.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    'process.step1.title': 'Vælg lokation',
    'process.step1.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    'process.step2.title': 'Book en dato',
    'process.step2.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    'process.step3.title': 'Lorem ipsum',
    'process.step3.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    'refs.title': 'Lorem ipsum dolor sit amet',
    'refs.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'refs.tab.refs': 'Referencer',
    'refs.tab.ad': 'Annonce',
    'refs.tab.lorem': 'Lorem',
    'refs.tab.ipsum': 'Ipsum',
    'refs.showMore': 'Vis mere',
    'refs.showLess': 'Vis færre',
    'refs.card.title': 'Lorem Ipsum',
    'refs.card.price': 'Lorem dolor',
    'refs.card.book': 'Book nu',
    'refs.card.fav': 'Tilføj til favoritter',
    'features.title': 'Lorem ipsum dolor sit',
    'features.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    'features.support.title': 'Kundesupport',
    'features.support.text': 'Lorem ipsum dolor sit amet integer maecenas turpis at fringilla suscipit.',
    'features.price.title': 'Bedste pris garanteret',
    'features.price.text': 'Lorem ipsum dolor sit amet integer maecenas turpis at fringilla suscipit.',
    'features.locations.title': 'Mange lokationer',
    'features.locations.text': 'Lorem ipsum dolor sit amet integer maecenas turpis at fringilla suscipit.',
    'media.play': 'Afspil video',
    'testimonials.title': 'Anbefalet af tusindvis af<br />tilfredse kunder',
    'testimonials.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    'testimonials.prev': 'Forrige',
    'testimonials.next': 'Næste',
    'testimonials.page': 'Gå til side',
    'footer.brand': 'NEMINGENIØR',
    'footer.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'footer.about': 'Om',
    'footer.how': 'Sådan virker det',
    'footer.benefits': 'Fordele',
    'footer.partnership': 'Partnerskab',
    'footer.business': 'Forretningsrelationer',
    'footer.community': 'Community',
    'footer.events': 'Events',
    'footer.blog': 'Blog',
    'footer.podcast': 'Podcast',
    'footer.invite': 'Inviter en ven',
    'footer.social': 'Sociale medier',
    'footer.copyright': '© 2026 Nemingeniør. Alle rettigheder forbeholdes.',
    'footer.privacy': 'Privatlivspolitik',
    'footer.terms': 'Vilkår & betingelser'
  },
  en: {
    'meta.title': 'Nemingeniør — Certified Fire Advisor',
    'meta.description': 'Nemingeniør — certified fire advisor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'lang.aria': 'Choose language',
    'nav.aria': 'Main menu',
    'nav.home': 'Home',
    'nav.about': 'Part of Nemingeniør',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    'nav.open': 'Open menu',
    'brand.name': 'Certified<br />Fire Advisor',
    'brand.sub': 'Part of Nemingeniør',
    'hero.eyebrow': 'Neque porro quisquam est qui dolorem ipsum quia.',
    'hero.title': 'Certified Fire Advisor',
    'hero.lead': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    'hero.tab.book': 'Book now',
    'hero.tab.refs': 'See references',
    'form.title': 'Contact us',
    'form.name': 'Name',
    'form.name.placeholder': 'Your full name',
    'form.email': 'Email',
    'form.email.placeholder': 'you@email.com',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.message.placeholder': 'Lorem ipsum dolor sit amet…',
    'form.consent': 'I accept that my information may be processed. <em>Lorem ipsum dolor.</em>',
    'form.submit': 'Send message',
    'form.success': '✓ Thank you! Your message has been sent. We will get back to you as soon as possible.',
    'form.error.name': 'Please enter your name.',
    'form.error.email': 'Please enter a valid email address.',
    'form.error.phone': 'Please enter a valid phone number.',
    'form.error.message': 'Please write a short message (min. 5 characters).',
    'form.error.consent': 'You must accept the terms.',
    'process.title': 'Lorem Ipsum passage',
    'process.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    'process.step1.title': 'Choose location',
    'process.step1.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    'process.step2.title': 'Book a date',
    'process.step2.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    'process.step3.title': 'Lorem ipsum',
    'process.step3.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    'refs.title': 'Lorem ipsum dolor sit amet',
    'refs.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'refs.tab.refs': 'References',
    'refs.tab.ad': 'Ad',
    'refs.tab.lorem': 'Lorem',
    'refs.tab.ipsum': 'Ipsum',
    'refs.showMore': 'Show more',
    'refs.showLess': 'Show less',
    'refs.card.title': 'Lorem Ipsum',
    'refs.card.price': 'Lorem dolor',
    'refs.card.book': 'Book now',
    'refs.card.fav': 'Add to favourites',
    'features.title': 'Lorem ipsum dolor sit',
    'features.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    'features.support.title': 'Customer support',
    'features.support.text': 'Lorem ipsum dolor sit amet integer maecenas turpis at fringilla suscipit.',
    'features.price.title': 'Best price guaranteed',
    'features.price.text': 'Lorem ipsum dolor sit amet integer maecenas turpis at fringilla suscipit.',
    'features.locations.title': 'Many locations',
    'features.locations.text': 'Lorem ipsum dolor sit amet integer maecenas turpis at fringilla suscipit.',
    'media.play': 'Play video',
    'testimonials.title': 'Recommended by thousands of<br />satisfied customers',
    'testimonials.sub': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    'testimonials.prev': 'Previous',
    'testimonials.next': 'Next',
    'testimonials.page': 'Go to page',
    'footer.brand': 'NEMINGENIØR',
    'footer.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'footer.about': 'About',
    'footer.how': 'How it works',
    'footer.benefits': 'Benefits',
    'footer.partnership': 'Partnership',
    'footer.business': 'Business relations',
    'footer.community': 'Community',
    'footer.events': 'Events',
    'footer.blog': 'Blog',
    'footer.podcast': 'Podcast',
    'footer.invite': 'Invite a friend',
    'footer.social': 'Social media',
    'footer.copyright': '© 2026 Nemingeniør. All rights reserved.',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms & conditions'
  }
  };

  var testimonialRoles = {
    da: ['Manager, Finland', 'Direktør, Danmark', 'Arkitekt, Norge', 'Bygherre, Sverige', 'Entreprenør, Danmark', 'Konsulent, Finland'],
    en: ['Manager, Finland', 'Director, Denmark', 'Architect, Norway', 'Developer, Sweden', 'Contractor, Denmark', 'Consultant, Finland']
  };

  var currentLang = 'da';
  var listeners = [];

  function getLang() { return currentLang; }

  function t(key) {
    var bucket = strings[currentLang] || strings.da;
    return bucket[key] != null ? bucket[key] : (strings.da[key] || key);
  }

  function applyToDom() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    document.title = t('meta.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    var langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
      langSwitch.classList.toggle('is-en', currentLang === 'en');
      langSwitch.querySelectorAll('.lang-switch__option').forEach(function (btn) {
        var active = btn.getAttribute('data-lang') === currentLang;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
    }
  }

  function setLang(lang) {
    if (lang !== 'da' && lang !== 'en') return;
    if (lang === currentLang) return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    applyToDom();
    listeners.forEach(function (fn) { fn(lang); });
  }

  function onChange(fn) { listeners.push(fn); }

  function initLangToggle() {
    var langSwitch = document.getElementById('langSwitch');
    if (!langSwitch) return;
    langSwitch.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-switch__option');
      if (!btn) return;
      setLang(btn.getAttribute('data-lang'));
    });
  }

  function init() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'da' || saved === 'en') currentLang = saved;
    } catch (e) { /* ignore */ }
    applyToDom();
    initLangToggle();
  }

  global.I18n = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    onChange: onChange,
    applyToDom: applyToDom,
    getTestimonialRole: function (index) {
      var roles = testimonialRoles[currentLang] || testimonialRoles.da;
      return roles[index] || '';
    },
    init: init
  };
})(window);
