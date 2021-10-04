var cartaMaquina;
var cartaJogador;

async function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * 897 + 1);

  var numCartaJogador = parseInt(Math.random() * 897 + 1);
  while (numCartaJogador == numCartaMaquina) {
    numCartaJogador = parseInt(Math.random() * 897 + 1);
  }

  let reqJogador = await axios.get("https://pokeapi.co/api/v2/pokemon/" + numCartaJogador);
  try {
    let dadosJogador = reqJogador.data;
    console.log(dadosJogador);

    cartaJogador = {
      nome: dadosJogador.name,
      image: dadosJogador.sprites.other["official-artwork"].front_default,
      atributos: {
        ataque: dadosJogador.stats[1].base_stat,
        defesa: dadosJogador.stats[2].base_stat,
        velocidade: dadosJogador.stats[5].base_stat,
        vida: dadosJogador.stats[0].base_stat
      }
    };

  } catch (err) {
    window.alert("deu erro");
    console.log(err);
  };

  let reqMaquina = await axios.get("https://pokeapi.co/api/v2/pokemon/" + numCartaMaquina);
  try {
    let dadosMaquina = reqMaquina.data;
    console.log(dadosMaquina);

    cartaMaquina = {
      nome: dadosMaquina.name,
      image: dadosMaquina.sprites.other["official-artwork"].front_default,
      atributos: {
        ataque: dadosMaquina.stats[1].base_stat,
        defesa: dadosMaquina.stats[2].base_stat,
        velocidade: dadosMaquina.stats[5].base_stat,
        vida: dadosMaquina.stats[0].base_stat

      }
    };

  } catch (err) {
    window.alert("deu erro");
    console.log(err);
  };

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  document.getElementById("btnJogar").style.display = "inline";
  var h2Hiden = document.getElementById("hiden");
  h2Hiden.innerHTML = "Escolha seu atributo";
  exibirCartaJogador();
  document.getElementById("carta-maquina").style.display = "none";
  document.getElementById("resultado").style.display = "none";
}

function atributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelected = atributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelected];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelected];

  if (valorCartaJogador > valorCartaMaquina) {
    divResultado =
      "<p class='resultado-final'>Você conseguiu derrotar o adversário!</p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    divResultado =
      "<p class='resultado-final'>Não foi dessa vez. Você perdeu!</p>";
  } else {
    divResultado = "<p class='resultado-final'>Vocês empataram.</p>";
  }
  elementoResultado.innerHTML = divResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("carta-maquina").style.display = "";

  document.getElementById("resultado").style.display = "";
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.image})`;

  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var dirCartaMaquina = document.getElementById("carta-maquina");
  dirCartaMaquina.style.backgroundImage = `url(${cartaMaquina.image})`;

  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name=' atributo ' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo];
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  dirCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
  