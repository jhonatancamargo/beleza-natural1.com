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
