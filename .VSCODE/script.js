function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

const img = document.querySelector('#profile img');

if (html.classList.contains('light')) {
  //se tiver light mode, adicionar a imagem light


  img.setAttribute('src', './avatar-light.png');
}else {

  img.setAttribute('src', './avatar.png');
}
}//pegar a tag image
// se tiver light mode, adicionar a imagem light
//substituir a imagem
//se não tiver light mode, manter a imagem normal
