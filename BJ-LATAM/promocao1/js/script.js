const videoWrappers = document.querySelectorAll('.video-wrapper');
let currentVideo = null;

function toggleVideo(video, wrapper) {
  if (video.paused) {
    if (currentVideo) {
      currentVideo.pause();
      const currentWrapper = currentVideo.closest('.video-wrapper');
      currentWrapper.querySelector('.play-button').classList.remove('hide');
    }
    video.play();
    video.playbackRate = 1.3; // Definir a velocidade de reprodução para 1.3x
    wrapper.querySelector('.play-button').classList.add('hide');
    currentVideo = video;
  } else {
    video.pause();
    wrapper.querySelector('.play-button').classList.remove('hide');
    currentVideo = null;
  }
}

function handleVideoWrapper(wrapper) {
  const video = wrapper.querySelector('video');
  const playButton = wrapper.querySelector('.play-button');

  if (video.paused) {
    if (currentVideo) {
      currentVideo.pause();
      const currentWrapper = currentVideo.closest('.video-wrapper');
      currentWrapper.querySelector('.play-button').classList.remove('hide');
    }
    video.play();
    video.playbackRate = 1.3; // Definir a velocidade de reprodução para 1.3x
    playButton.classList.add('hide');
    currentVideo = video;
  } else {
    video.pause();
    playButton.classList.remove('hide');
    currentVideo = null;
  }
}

function checkMobile() {
  const isMobile = window.innerWidth <= 768;

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector('video');

    if (isMobile) {
      video.removeAttribute('controls');
      wrapper.addEventListener('click', handleVideoWrapper.bind(null, wrapper));
    } else {
      video.setAttribute('controls', 'true');
      wrapper.removeEventListener('click', handleVideoWrapper);
    }
  });

  console.log(isMobile ? 'Dispositivo móvel detectado!' : 'Dispositivo não móvel detectado!');
}

checkMobile();
window.addEventListener('resize', checkMobile);

 // Função para obter um item aleatório de uma lista
function obterItemAleatorio(lista) {
  var indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

// Função para exibir o pop-up com o nome e palavra após o nome
function exibirPopup() {
  var popupElemento = document.getElementById("popup");
  var nome = obterItemAleatorio(nomes);
  var palavra = obterItemAleatorio(palavras);
  popupElemento.innerHTML = "<strong>" + nome + "</strong> " + palavra; /* Nome em negrito */
  popupElemento.style.display = "block";

  // Ocultar o pop-up após 3 segundos com efeito de desvanecimento
  setTimeout(function() {
    popupElemento.style.animation = "fadeOut 1s";
    setTimeout(function() {
      popupElemento.style.display = "none";
      popupElemento.style.animation = "";

      // Agendar o próximo pop-up com um tempo aleatório
      var tempoAleatorio = Math.random() * 5000; // Tempo aleatório entre 0 e 5 segundos
      setTimeout(exibirPopup, tempoAleatorio);
    }, 1000);
  }, 3000);
}

// Lista de nomes
var nomes = ["Maria", "Ana", "Joana", "Isabela", "Laura", "Gabriela", "Carolina", "Amanda", "Sophia", "Larissa", "Mariana", "Valentina", "Juliana", "Renata", "Fernanda"];

// Lista de palavras após o nome
var palavras = ["comprou o Visão Restaurada", "Também adquiriu o Visão Restaurada", "acabou de efetuar sua compra"];

// Agendar o primeiro pop-up para o próximo segundo
setTimeout(exibirPopup, 1000);