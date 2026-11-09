// VieLine — chuyển ngôn ngữ, tour màn hình, hiệu ứng hiện dần. Không thư viện ngoài.
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.remove('no-js');

  // ---- ngôn ngữ ----
  var META = {
    en: { title: document.querySelector('meta[name="vl-title-en"]').content, desc: document.querySelector('meta[name="vl-desc-en"]').content },
    vi: { title: document.querySelector('meta[name="vl-title-vi"]').content, desc: document.querySelector('meta[name="vl-desc-vi"]').content }
  };
  function setLang(l, save) {
    if (l !== 'en' && l !== 'vi') return;
    root.dataset.lang = l;
    document.querySelectorAll('video').forEach(function (v) { v.pause(); });   // đổi ngôn ngữ: dừng phim đang chạy
    root.lang = l;
    document.title = META[l].title;
    document.querySelector('meta[name="description"]').content = META[l].desc;
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === l)); });
    if (save) { try { localStorage.setItem('vl-lang', l); } catch (e) { /* chế độ riêng tư */ } }
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      setLang(b.dataset.set, true);
      var u = new URL(location.href); u.searchParams.set('lang', b.dataset.set); history.replaceState(null, '', u);
    });
  });
  setLang(root.dataset.lang, false);

  // ---- tour màn hình thiết bị ----
  var stage = document.getElementById('screen-img');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.screen-list button'));
  var idx = 0, timer = null;
  function pick(i) {
    idx = (i + tabs.length) % tabs.length;
    tabs.forEach(function (t, j) { t.setAttribute('aria-selected', String(j === idx)); t.tabIndex = j === idx ? 0 : -1; });
    stage.style.opacity = '0';
    setTimeout(function () { stage.src = tabs[idx].dataset.src; stage.alt = tabs[idx].querySelector('b[data-l="' + root.dataset.lang + '"]').textContent; stage.style.opacity = '1'; }, 160);
  }
  function auto() { stop(); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(function () { pick(idx + 1); }, 4200); }
  function stop() { if (timer) clearInterval(timer); timer = null; }
  tabs.forEach(function (t, j) {
    t.addEventListener('click', function () { stop(); pick(j); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); stop(); pick(idx + 1); tabs[idx].focus(); }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); stop(); pick(idx - 1); tabs[idx].focus(); }
    });
  });
  if (stage && tabs.length) {
    tabs.forEach(function (t) { var im = new Image(); im.src = t.dataset.src; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { if (!timer) auto(); } else stop(); }); }, { threshold: .3 }).observe(stage);
    }
  }

  // ---- hiện dần khi cuộn tới ----
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  } else els.forEach(function (e) { e.classList.add('in'); });
})();
