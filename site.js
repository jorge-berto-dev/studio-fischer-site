// Menu móvel + cards de serviços e depoimentos (dados públicos verificados).
(function () {
  var hamb = document.getElementById('hamb');
  var menu = document.getElementById('menuMob');
  if (hamb && menu) {
    var fechar = function () {
      menu.classList.remove('aberto');
      hamb.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-aberto');
    };
    hamb.addEventListener('click', function (e) {
      e.stopPropagation();
      var aberto = menu.classList.toggle('aberto');
      hamb.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      document.body.classList.toggle('menu-aberto', aberto);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', fechar);
    });
    document.addEventListener('click', function (e) {
      if (menu.classList.contains('aberto') && !menu.contains(e.target)) fechar();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fechar();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) fechar();
    });
  }

  var WA = 'https://wa.me/5511917540937?text=';
  var AGENDAR = 'https://studio-fischer.vercel.app/agendar';

  var S = function (inner) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + inner + '</svg>'; };
  var servicos = [
    { svg: S('<path d="M3 12h4l2.5-7 4 14 2.5-7H21"/>'), nome: 'Fisioterapia', txt: 'Avaliação e tratamento individual para dores, lesões e recuperação de movimentos.' },
    { svg: S('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/>'), nome: 'Pilates', txt: 'Solo e equipamentos, turmas pequenas com acompanhamento de perto. Inclusive para gestantes.' },
    { svg: S('<path d="M6.5 6.5v11M17.5 6.5v11M4 9.5v5M20 9.5v5M6.5 12h11"/>'), nome: 'Pilates funcional', txt: 'Força, mobilidade e equilíbrio com exercícios funcionais no método Pilates.' },
    { svg: S('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>'), nome: 'Yoga', txt: 'Respiração, flexibilidade e bem-estar em aulas em grupo.' },
    { svg: S('<path d="M12 3v18M8 7.5h8M8 12h8M8 16.5h8"/>'), nome: 'Quiropraxia', txt: 'Ajustes para coluna, postura e alívio de dores.' },
    { svg: S('<path d="M8 3C5 4.5 4 8 5.5 11c1 2 1 3.5.5 5-.4 1.2-.3 2.6.8 3.4 1.2.9 3.2.7 4.4-.3"/><path d="M9.5 8.5c.5 2 1.5 3 1 5"/>'), nome: 'Auriculoterapia', txt: 'Estímulo de pontos da orelha para equilíbrio do corpo.' },
    { svg: S('<path d="M4 20L16 8"/><circle cx="18" cy="6" r="2"/><path d="M9.5 14.5l1.5 1.5M12.5 11.5L14 13"/>'), nome: 'Acupuntura', txt: 'Técnica da medicina tradicional chinesa para dor e bem-estar.' },
    { svg: S('<path d="M12 3c.7 4.5 2.5 6.3 7 7-4.5.7-6.3 2.5-7 7-.7-4.5-2.5-6.3-7-7 4.5-.7 6.3-2.5 7-7z"/>'), nome: 'Estética e beleza', txt: 'Limpeza de pele e cuidados estéticos.' },
    { svg: S('<path d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>'), nome: 'Massoterapia', txt: 'Massagem terapêutica e relaxante.' },
  ];

  var grade = document.getElementById('gradeServicos');
  if (grade) {
    grade.innerHTML = servicos.map(function (s) {
      var msg = encodeURIComponent('Olá! Vim pelo site e quero informações sobre ' + s.nome + '.');
      return (
        '<article class="svc">' +
        '<span class="ico" aria-hidden="true">' + s.svg + '</span>' +
        '<h3>' + s.nome + '</h3>' +
        '<p>' + s.txt + '</p>' +
        '<div class="links">' +
        '<a class="ag" href="' + AGENDAR + '">Agendar</a>' +
        '<a class="wa" href="' + WA + msg + '" target="_blank" rel="noopener">WhatsApp</a>' +
        '</div></article>'
      );
    }).join('');
  }

  // Trechos de avaliações públicas no Google (nota média 4,9).
  var depoimentos = [
    { txt: 'Fui aluno de Pilates por quase 2 anos. Profissionais incríveis, atenciosos e dedicados. Preço justo! Recomendo demais!', fonte: 'Avaliação pública no Google' },
    { txt: 'As aulas de Pilates são dadas por fisioterapeutas, poucos alunos por aula. Cada treino é personalizado e acompanhado individualmente. Tira as dores do corpo e da mente.', fonte: 'Avaliação pública no Google' },
    { txt: 'Faço Pilates há 2 anos e as melhorias na postura, equilíbrio e mobilidade são enormes. Adoro fazer as aulas.', fonte: 'Avaliação pública no Google' },
    { txt: 'Não é só um studio, é um lugar onde recebemos atenção, trabalho individualizado e muito amor!', fonte: 'Avaliação pública no Google' },
  ];

  var depo = document.getElementById('gradeDepo');
  if (depo) {
    depo.innerHTML = depoimentos.map(function (d) {
      return (
        '<figure class="depo">' +
        '<span class="estrelas" aria-label="5 de 5 estrelas">★★★★★</span>' +
        '<blockquote>“' + d.txt + '”</blockquote>' +
        '<cite>— ' + d.fonte + '</cite>' +
        '</figure>'
      );
    }).join('');
  }

  // ---------- app do aluno: APK direto no Android, PWA no iPhone ----------
  var btn = document.getElementById('btnApk');
  var ehIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  if (btn) {
    if (ehIOS) {
      // iPhone não instala .apk: manda para a página de instalação
      btn.textContent = 'Tenho iPhone — ver como instalar';
      btn.setAttribute('href', 'instalar-iphone.html');
      btn.removeAttribute('download');
    } else {
      // Android e computador: baixa o arquivo direto
      btn.addEventListener('click', function () {
        if (!ehIOS) btn.setAttribute('download', 'studio-fischer-app.apk');
      });
    }
  }
})();
