document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    if (!botaoDeAcessibilidade || !opcoesDeAcessibilidade) return;

    botaoDeAcessibilidade.addEventListener('click', function (){
      botaoDeAcessibilidade.classList.toggle('rotacao-botao');
      opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

      const expandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
      botaoDeAcessibilidade.setAttribute('aria-expanded', String(!expandido));
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    if (aumentaFonteBotao) {
      aumentaFonteBotao.addEventListener('click', function(){
          tamanhoAtualFonte = Math.min(2, tamanhoAtualFonte + 0.1);
          document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
      });
    }

    if (diminuiFonteBotao) {
      diminuiFonteBotao.addEventListener('click', function(){
          tamanhoAtualFonte = Math.max(0.7, tamanhoAtualFonte - 0.1);
          document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
      });
    }

    if (alternaContraste) {
      alternaContraste.addEventListener('click', function(){
          document.body.classList.toggle('alto-contraste');
      });
    }
});

// Animações ScrollReveal (executa só se a lib existir e foi carregada)
if (typeof ScrollReveal !== 'undefined') {
  try {
    ScrollReveal().reveal('#artigo', { delay: 300 });
    ScrollReveal().reveal('.aside', { delay: 500 });
  } catch (e) {
    console.warn('ScrollReveal não pôde iniciar:', e);
  }
} else {
  // Evita erro quando offline/sem CDN
  console.info('ScrollReveal não carregado; prosseguindo sem animações.');
}
