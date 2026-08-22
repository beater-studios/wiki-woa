(function () {
  var KONAMI = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  var progress = 0;

  document.addEventListener('keydown', function (e) {
    if (e.key === KONAMI[progress]) {
      progress++;
      if (progress === KONAMI.length) {
        progress = 0;
        triggerEasterEgg();
      }
    } else {
      progress = e.key === KONAMI[0] ? 1 : 0;
    }
  });

  function triggerEasterEgg() {
    if (document.getElementById('woa-easter-egg')) return;

    var overlay = document.createElement('div');
    overlay.id = 'woa-easter-egg';
    overlay.innerHTML = [
      '<button class="woa-ee__close" aria-label="Fechar">✕</button>',
      '<div class="woa-ee__box">',
      '  <div class="woa-ee__symbol">⚔</div>',
      '  <div class="woa-ee__title">SWORD ART ONLINE</div>',
      '  <div class="woa-ee__subtitle">Bem-vindo ao World of Aincrad, Jogador.</div>',
      '  <div class="woa-ee__hint">Você descobriu o código secreto.</div>',
      '  <div class="woa-ee__code">6E94-A859-4C0A</div>',
      '  <div class="woa-ee__code-label">Resgate este Cardinal Code no jogo</div>',
      '</div>'
    ].join('');

    document.body.appendChild(overlay);

    requestAnimationFrame(function () {
      overlay.classList.add('woa-ee--visible');
    });

    overlay.querySelector('.woa-ee__close').addEventListener('click', closeEgg);
    document.addEventListener('keydown', closeOnKey);

    function closeOnKey(e) {
      if (e.key === 'Escape') closeEgg();
    }

    function closeEgg() {
      overlay.classList.remove('woa-ee--visible');
      document.removeEventListener('keydown', closeOnKey);
      setTimeout(function () { overlay.remove(); }, 400);
    }
  }
})();
