// Exemplo de funcionalidade simples
document.addEventListener("DOMContentLoaded", () => {
  console.log("Pokédex App carregado!");

    // script.js
  const imagens = document.querySelectorAll('.carrossel .imagens img');
  let indiceAtual = 0;

  function mostrarImagem(index) {
    imagens.forEach((img, i) => {
      img.classList.toggle('ativa', i === index);
    });
  }

  document.querySelector('.btn-anterior').addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
  });

  document.querySelector('.btn-proximo').addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
  });

});
