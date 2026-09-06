/* ============================================================
   GREAZ — App Logic
   i18n · Menu rendering · Item customization modal · Cart ·
   WhatsApp checkout
   ============================================================ */
(function () {
  'use strict';

  /* ---------- State ---------- */
  let lang = localStorage.getItem('greaz_lang') || 'ar';
  let cart = JSON.parse(localStorage.getItem('greaz_cart') || '[]');
  let currentCat = 'all';
  let modalItem = null;
  const mState = { qty: 1, removed: new Set(), extras: new Set(), choices: {} };

  /* ---------- Helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  const L = (obj) => (obj && (obj[lang] || obj.en)) || '';
  const fmt = (n) => '$' + (Number.isInteger(n) ? n : n.toFixed(2));
  const save = () => localStorage.setItem('greaz_cart', JSON.stringify(cart));

  function itemById(id) { return MENU.find((i) => i.id === id); }

  /* ============================================================
     i18n
     ============================================================ */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar'
      ? 'GREAZ | مش برجرك المعتاد — بيروت'
      : 'GREAZ | Not Your Usual Burger — Beirut';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      el.placeholder = t(el.dataset.i18nPh);
    });

    $('langBtn').textContent = lang === 'ar' ? 'EN' : 'عربي';
    $('heroWa').href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
      lang === 'ar' ? 'أهلاً GREAZ! 👋 أريد أن أطلب.' : 'Hi GREAZ! 👋 I would like to order.'
    )}`;
    $('ccAddress').href = CONFIG.mapUrl;
    $('addressVal').textContent = lang === 'ar' ? CONFIG.addressAr : CONFIG.addressEn;
    $('hoursVal').textContent = lang === 'ar' ? CONFIG.hoursAr : CONFIG.hoursEn;
    $('cartPickup').textContent = t('cart.pickup') + (lang === 'ar' ? CONFIG.addressAr : CONFIG.addressEn);

    renderMarquee();
    renderPills();
    renderMenu();
    renderCart();
    if (modalItem) renderModal(modalItem);
  }

  /* ============================================================
     Marquee
     ============================================================ */
  function renderMarquee() {
    const words = MARQUEE[lang];
    const seq = words.map((w) => `<span class="mq-item">${w}</span><span class="mq-star">★</span>`).join('');
    $('marqueeTrack').innerHTML = seq + seq; // duplicated for seamless loop
  }

  /* ============================================================
     Menu
     ============================================================ */
  function renderPills() {
    const cats = ['all', 'burgers', 'wraps', 'appetizers', 'drinks'];
    $('catPills').innerHTML = cats
      .map((c) => `<button class="pill ${c === currentCat ? 'active' : ''}" data-cat="${c}">${t('cat.' + c)}</button>`)
      .join('');
    $('catPills').querySelectorAll('.pill').forEach((b) =>
      b.addEventListener('click', () => { currentCat = b.dataset.cat; renderPills(); renderMenu(); })
    );
  }

  function mediaHtml(item, cls) {
    return item.img
      ? `<img src="${item.img}" alt="${L(item.name)}" loading="lazy">`
      : `<div class="${cls}" aria-hidden="true"><span>${item.emoji}</span></div>`;
  }

  function renderMenu() {
    const list = MENU.filter((i) => currentCat === 'all' || i.cat === currentCat);
    $('menuGrid').innerHTML = list
      .map(
        (item) => `
        <article class="menu-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${L(item.name)}">
          <div class="card-media">
            ${mediaHtml(item, 'img-fallback')}
            <span class="card-price">${fmt(item.price)}</span>
          </div>
          <div class="card-body">
            <h3>${L(item.name)}</h3>
            <p>${L(item.desc)}</p>
            <div class="card-foot">
              <span class="card-total">${fmt(item.price)}</span>
              <button class="btn-add" aria-label="${t('card.add')} ${L(item.name)}">
                <span>${t('card.add')}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </article>`
      )
      .join('');

    $('menuGrid').querySelectorAll('.menu-card').forEach((card) => {
      const open = () => openModal(itemById(card.dataset.id));
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  }

  /* ============================================================
     Item modal — معاينة العنصر وتخصيصه
     ============================================================ */
  function openModal(item) {
    modalItem = item;
    mState.qty = 1;
    mState.removed = new Set();
    mState.extras = new Set();
    mState.choices = {};
    (item.choices || []).forEach((g) => { mState.choices[g.id] = g.options[0].id; });
    $('mNotes').value = '';
    renderModal(item);
    $('itemModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $('itemModal').classList.remove('open');
    document.body.style.overflow = '';
    modalItem = null;
  }

  function renderModal(item) {
    $('mMedia').innerHTML = item.img
      ? `<img src="${item.img}" alt="${L(item.name)}">`
      : `<div class="img-fallback modal-fallback"><span>${item.emoji}</span></div>`;
    $('mName').textContent = L(item.name);
    $('mDesc').textContent = L(item.desc);
    $('mBase').textContent = fmt(item.price);
    $('mQty').textContent = mState.qty;

    /* Ingredients — toggleable chips */
    if (item.ingredients && item.ingredients.length) {
      $('mIngSec').style.display = '';
      $('mIng').innerHTML = item.ingredients
        .map((ing) => {
          const off = mState.removed.has(ing.id);
          return `<button class="chip ${off ? 'off' : ''}" data-ing="${ing.id}">
                    <span class="chip-dot">${off ? '✕' : '✓'}</span>${L(ing.name)}
                  </button>`;
        })
        .join('');
      $('mIng').querySelectorAll('.chip').forEach((c) =>
        c.addEventListener('click', () => {
          const id = c.dataset.ing;
          mState.removed.has(id) ? mState.removed.delete(id) : mState.removed.add(id);
          renderModal(item);
        })
      );
    } else {
      $('mIngSec').style.display = 'none';
    }

    /* Choice groups (sauces / flavors) */
    const sec = $('mChoiceSec');
    if (item.choices && item.choices.length) {
      sec.style.display = '';
      sec.innerHTML = item.choices
        .map(
          (g) => `
        <h4>${L(g.name)} <small>${t('modal.chooseOne')}</small></h4>
        <div class="chips choice-chips">
          ${g.options
            .map(
              (o) => `<button class="chip choice ${mState.choices[g.id] === o.id ? 'on' : ''}" data-g="${g.id}" data-o="${o.id}">${L(o.name)}</button>`
            )
            .join('')}
        </div>`
        )
        .join('');
      sec.querySelectorAll('.chip.choice').forEach((c) =>
        c.addEventListener('click', () => {
          mState.choices[c.dataset.g] = c.dataset.o;
          renderModal(item);
        })
      );
    } else {
      sec.style.display = 'none';
      sec.innerHTML = '';
    }

    /* Paid extras */
    if (item.extras && item.extras.length) {
      $('mExtrasSec').style.display = '';
      $('mExtras').innerHTML = item.extras
        .map((exId) => {
          const ex = EXTRAS[exId];
          const on = mState.extras.has(exId);
          return `
          <button class="extra-row ${on ? 'on' : ''}" data-ex="${exId}">
            <span class="ex-check">${on ? '✓' : '+'}</span>
            <span class="ex-name">${L(ex.name)}</span>
          </button>`;
        })
        .join('');
      $('mExtras').querySelectorAll('.extra-row').forEach((r) =>
        r.addEventListener('click', () => {
          const id = r.dataset.ex;
          mState.extras.has(id) ? mState.extras.delete(id) : mState.extras.add(id);
          renderModal(item);
        })
      );
    } else {
      $('mExtrasSec').style.display = 'none';
    }

    updateModalAddBtn(item);
  }

  function unitPrice(item, extrasArr) {
    return item.price + extrasArr.reduce((s, id) => s + (EXTRAS[id] ? EXTRAS[id].price : 0), 0);
  }

  function updateModalAddBtn(item) {
    const extrasArr = [...mState.extras];
    const total = unitPrice(item, extrasArr) * mState.qty;
    $('mAdd').innerHTML = `${t('modal.add')} · <b>${fmt(total)}</b>`;
  }

  function addToCart() {
    if (!modalItem) return;
    const extrasArr = [...mState.extras].sort();
    const removedArr = [...mState.removed].sort();
    const notes = $('mNotes').value.trim();
    const key = [modalItem.id, removedArr.join(','), extrasArr.join(','),
      Object.entries(mState.choices).map(([g, o]) => g + ':' + o).sort().join(','), notes].join('|');

    const existing = cart.find((l) => l.key === key);
    if (existing) existing.qty += mState.qty;
    else cart.push({ key, id: modalItem.id, qty: mState.qty, removed: removedArr, extras: extrasArr, choices: { ...mState.choices }, notes });

    save();
    renderCart();
    closeModal();
    showToast(t('modal.addedToast'));
  }

  /* ============================================================
     Cart
     ============================================================ */
  function cartTotals() {
    let count = 0, total = 0;
    cart.forEach((l) => {
      const item = itemById(l.id);
      if (!item) return;
      count += l.qty;
      total += unitPrice(item, l.extras) * l.qty;
    });
    return { count, total };
  }

  function lineModsHtml(l, item) {
    const bits = [];
    l.extras.forEach((exId) => {
      if (EXTRAS[exId]) bits.push(`<i class="mod extra">+ ${L(EXTRAS[exId].name)}</i>`);
    });
    if (l.removed.length) {
      const names = l.removed
        .map((r) => { const ing = (item.ingredients || []).find((i) => i.id === r); return ing ? L(ing.name) : ''; })
        .filter(Boolean)
        .join('، ');
      if (names) bits.push(`<i class="mod no">${t('wa.no')}: ${names}</i>`);
    }
    (item.choices || []).forEach((g) => {
      const opt = g.options.find((o) => o.id === l.choices[g.id]);
      if (opt) bits.push(`<i class="mod ch">${L(g.name)}: ${L(opt.name)}</i>`);
    });
    if (l.notes) bits.push(`<i class="mod note">📝 ${escapeHtml(l.notes)}</i>`);
    return bits.join('');
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderCart() {
    const { count, total } = cartTotals();
    $('cartCount').textContent = count;

    if (!cart.length) {
      $('cartItems').innerHTML = `
        <div class="cart-empty">
          <span class="ce-icon">🛒</span>
          <b>${t('cart.empty')}</b>
          <p>${t('cart.emptyHint')}</p>
        </div>`;
    } else {
      $('cartItems').innerHTML = cart
        .map((l) => {
          const item = itemById(l.id);
          if (!item) return '';
          const unit = unitPrice(item, l.extras);
          return `
          <div class="cart-line">
            <div class="ci-media">${mediaHtml(item, 'img-fallback sm')}</div>
            <div class="ci-info">
              <div class="ci-top">
                <b>${L(item.name)}</b>
                <button class="icon-btn ci-remove" data-key="${l.key}" aria-label="Remove">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                </button>
              </div>
              <div class="ci-mods">${lineModsHtml(l, item)}</div>
              <div class="ci-bottom">
                <div class="qty-stepper sm">
                  <button data-act="dec" data-key="${l.key}" aria-label="-">−</button>
                  <span>${l.qty}</span>
                  <button data-act="inc" data-key="${l.key}" aria-label="+">+</button>
                </div>
                <span class="ci-price">${fmt(unit * l.qty)}</span>
              </div>
            </div>
          </div>`;
        })
        .join('');
    }

    $('cartTotal').textContent = fmt(total);
    $('checkoutBtn').disabled = !cart.length;

    /* Mobile cart bar */
    const bar = $('cartBar');
    if (cart.length) {
      bar.hidden = false;
      $('cbCount').textContent = count;
      $('cbText').textContent = t('cart.barText');
      $('cbTotal').textContent = fmt(total);
    } else {
      bar.hidden = true;
    }

    bindCartEvents();
  }

  function bindCartEvents() {
    $('cartItems').querySelectorAll('.qty-stepper button').forEach((b) =>
      b.addEventListener('click', () => {
        const line = cart.find((l) => l.key === b.dataset.key);
        if (!line) return;
        if (b.dataset.act === 'inc') line.qty++;
        else { line.qty--; if (line.qty <= 0) cart = cart.filter((l) => l.key !== line.key); }
        save(); renderCart();
      })
    );
    $('cartItems').querySelectorAll('.ci-remove').forEach((b) =>
      b.addEventListener('click', () => {
        cart = cart.filter((l) => l.key !== b.dataset.key);
        save(); renderCart();
      })
    );
  }

  function openCart() {
    $('cartDrawer').classList.add('open');
    $('cartBackdrop').classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    $('cartDrawer').classList.remove('open');
    $('cartBackdrop').classList.remove('show');
    document.body.style.overflow = '';
  }

  /* ============================================================
     WhatsApp checkout — إرسال الطلب عبر واتساب
     ============================================================ */
  function checkout() {
    if (!cart.length) return;
    const sep = '━━━━━━━━━━━━━━━';
    const lines = [t('wa.orderTitle'), sep];

    cart.forEach((l) => {
      const item = itemById(l.id);
      if (!item) return;
      const unit = unitPrice(item, l.extras);
      lines.push(`*${l.qty}× ${L(item.name)}* — ${fmt(unit * l.qty)}`);
      l.extras.forEach((exId) => {
        if (EXTRAS[exId]) lines.push(`   ✚ ${L(EXTRAS[exId].name)} (+${fmt(EXTRAS[exId].price)})`);
      });
      if (l.removed.length) {
        const names = l.removed
          .map((r) => { const ing = (item.ingredients || []).find((i) => i.id === r); return ing ? L(ing.name) : ''; })
          .filter(Boolean)
          .join('، ');
        if (names) lines.push(`   ➖ ${t('wa.no')}: ${names}`);
      }
      (item.choices || []).forEach((g) => {
        const opt = g.options.find((o) => o.id === l.choices[g.id]);
        if (opt) lines.push(`   🥫 ${L(g.name)}: ${L(opt.name)}`);
      });
      if (l.notes) lines.push(`   ${t('wa.notes')}: ${l.notes}`);
    });

    const { total } = cartTotals();
    lines.push(sep);
    lines.push(`${t('wa.total')}: *${fmt(total)}*`);
    lines.push(`${t('wa.pickup')} GREAZ — ${lang === 'ar' ? CONFIG.addressAr : CONFIG.addressEn}`);
    lines.push('');
    lines.push(t('wa.thanks'));

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  }

  /* ============================================================
     Toast
     ============================================================ */
  let toastTimer;
  function showToast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  /* ============================================================
     Reveal on scroll
     ============================================================ */
  function initReveal() {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  /* ============================================================
     Header on scroll
     ============================================================ */
  function initHeader() {
    const onScroll = () => $('header').classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     Events & init
     ============================================================ */
  function init() {
    /* Language */
    $('langBtn').addEventListener('click', () => {
      lang = lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('greaz_lang', lang);
      applyI18n();
    });

    /* Nav */
    $('navToggle').addEventListener('click', () => $('mobileNav').classList.toggle('open'));
    document.querySelectorAll('#mobileNav a').forEach((a) =>
      a.addEventListener('click', () => $('mobileNav').classList.remove('open'))
    );

    /* Cart */
    $('cartBtn').addEventListener('click', openCart);
    $('cartBar').addEventListener('click', openCart);
    $('cartClose').addEventListener('click', closeCart);
    $('cartBackdrop').addEventListener('click', closeCart);
    $('clearCart').addEventListener('click', () => { cart = []; save(); renderCart(); });
    $('checkoutBtn').addEventListener('click', checkout);

    /* Modal */
    $('modalClose').addEventListener('click', closeModal);
    $('itemModal').addEventListener('click', (e) => { if (e.target === $('itemModal')) closeModal(); });
    $('mQtyMinus').addEventListener('click', () => { if (mState.qty > 1) { mState.qty--; $('mQty').textContent = mState.qty; if (modalItem) updateModalAddBtn(modalItem); } });
    $('mQtyPlus').addEventListener('click', () => { mState.qty++; $('mQty').textContent = mState.qty; if (modalItem) updateModalAddBtn(modalItem); });
    $('mAdd').addEventListener('click', addToCart);

    /* ESC closes overlays */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeModal(); closeCart(); $('mobileNav').classList.remove('open'); }
    });

    applyI18n();
    initHeader();
    initReveal();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
