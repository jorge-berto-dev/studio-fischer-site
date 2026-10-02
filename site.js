// Menu móvel + cards de serviços e depoimentos (dados públicos verificados).
(function () {
  var hamb = document.getElementById('hamb');
  var menu = document.getElementById('menuMob');
  if (hamb && menu) {
    hamb.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      hamb.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('aberto'); });
    });
  }

  var WA = 'https://wa.me/5511917540937?text=';
  var AGENDAR = 'https://studio-fischer.vercel.app/agendar';

  var servicos = [
    { ico: '\uD83E\uDDB5', nome: 'Fisioterapia', txt: 'Avaliação e tratamento individual para dores, lesões e recuperação de movimentos.' },
    { ico: '\uD83E\uDDD8', nome: 'Pilates', txt: 'Solo e equipamentos, turmas pequenas com acompanhamento de perto. Inclusive para gestantes.' },
    { ico: '\uD83E\uDDD8', nome: 'Pilates funcional', txt: 'Força, mobilidade e equilíbrio com exercícios funcionais no método Pilates.' },
    { ico: '🧘', nome: 'Yoga', txt: 'Respiração, flexibilidade e bem-estar em aulas em grupo.' },
    { ico: '\uD83E\uDDB7', nome: 'Quiropraxia', txt: 'Ajustes para coluna, postura e alívio de dores.' },
    { ico: '\uD83D\uDC42', nome: 'Auriculoterapia', txt: 'Estímulo de pontos da orelha para equilíbrio do corpo.' },
    { ico: '\uD83D\uDCCC', nome: 'Acupuntura', txt: 'Técnica da medicina tradicional chinesa para dor e bem-estar.' },
    { ico: '\u2728', nome: 'Estética e beleza', txt: 'Limpeza de pele e cuidados estéticos.' },
    { ico: '\uD83D\uDC86', nome: 'Massoterapia', txt: 'Massagem terapêutica e relaxante.' },
  ];

  var grade = document.getElementById('gradeServicos');
  if (grade) {
    grade.innerHTML = servicos.map(function (s) {
      var msg = encodeURIComponent('Olá! Vim pelo site e quero informações sobre ' + s.nome + '.');
      return (
        '<article class="svc">' +
        '<span class="ico" aria-hidden="true">' + s.ico + '</span>' +
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
})();
