function verificar() {
  let data = new Date();
  let anoAtual = data.getFullYear();
  let fano = document.getElementById('txtano');
  let res = document.querySelector('div#res');

  // Validação do ano
  if (fano.value.length == 0 || isNaN(fano.value) || Number(fano.value) > anoAtual || Number(fano.value) < 1900) {
    window.alert('[ERRO] Verifique o ano e tente novamente!');
    return; // Sai da função caso haja erro
  }

  let fsex = document.getElementsByName('radsex');
  let idade = anoAtual - Number(fano.value);
  let gênero = '';
  let img = document.createElement('img');
  img.setAttribute('id', 'foto');

  // Define o gênero e a imagem
  if (fsex[0].checked) {
    gênero = 'Homem';
    img.src = getImagem(idade, 'm');
  } else if (fsex[1].checked) {
    gênero = 'Mulher';
    img.src = getImagem(idade, 'f');
  }

  // Exibe a informação no elemento "res"
  res.style.textAlign = 'center';
  res.innerHTML = ` Detectamos: ${gênero} com idade ${idade} Anos.`;
  res.appendChild(img);

  // Adiciona tratamento de erro para a imagem
  img.onerror = function() {
    res.innerHTML += "<p>Imagem não encontrada.</p>";
  };
}

// Função para obter o caminho da imagem
function getImagem(idade, sexo) {
  if (idade >= 0 && idade < 10) {
    return `foto-bebe-${sexo}.png`;
  } else if (idade < 21) {
    return `foto-jovem-${sexo}.png`;
  } else if (idade < 50) {
    return `foto-adulto-${sexo}.png`;
  } else {
    return `foto-idoso-${sexo}.png`;
  }
}