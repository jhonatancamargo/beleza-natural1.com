// atualizarData.js

// Função para obter a data atual em formato legível
function obterDataAtual() {
  const dataAtual = new Date();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return dataAtual.toLocaleDateString('pt-BR', options);
}

// Função para atualizar a data no elemento HTML
function atualizarData() {
  const dataContainer = document.getElementById('dataAtualizada');
  if (dataContainer) {
    dataContainer.textContent = obterDataAtual();
  }
}

// Atualizar a data inicial
atualizarData();

// Script para o cronômetro
function startCountdown(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 15 * 60;
    var display = document.querySelector('#countdown');
    startCountdown(fiveMinutes, display);
};

document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var ofertaSection = document.getElementById("oferta"); // substitua "oferta" pelo ID real da seção de ofertas
        var ofertaStart = ofertaSection.offsetTop;
        var ofertaEnd = ofertaStart + ofertaSection.offsetHeight;
        var twentyPercent = document.body.scrollHeight * 0.20; // 20% da altura da página

        // Verifica se a posição de rolagem está acima de 20% da página
        if (scrollPosition < twentyPercent) {
            banner.style.opacity = 0; /* Torna o banner visível acima de 20% da página */
        } else if (scrollPosition >= ofertaStart && scrollPosition <= ofertaEnd) {
            banner.style.opacity = 0; /* Oculta o banner sobre a seção de ofertas */
        } else {
            banner.style.opacity = 1; /* Torna o banner visível fora da seção de ofertas e abaixo de 20% da página */
        }
    });
});