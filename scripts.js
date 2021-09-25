var cartas = [
    (carta1 = {
      nome: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      atributos: {
        ataque: 55,
        defesa: 40,
        magia: 90
      }
    }),
    (carta2 = {
      nome: "Bulbassauro",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      atributos: {
        ataque: 49,
        defesa: 49,
        magia: 45
      }
    }),
    (carta3 = {
      nome: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      atributos: {
        ataque: 52,
        defesa: 43,
        magia: 65
      }
    }),
    (carta4 = {
      nome: "Squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      atributos: {
        ataque: 48,
        defesa: 65,
        magia: 43
      }
    }),
    (carta5 = {
      nome: "Ninetales",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
      atributos: {
        ataque: 76,
        defesa: 75,
        magia: 100
      }
    }),
    (carta6 = {
      nome: "Pidgey",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
      atributos: {
        ataque: 45,
        defesa: 40,
        magia: 56
      }
    }),
    (carta7 = {
      nome: "Clefairy",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
      atributos: {
        ataque: 45,
        defesa: 48,
        magia: 35
      }
    }),
    (carta8 = {
      nome: "Nidoran-m",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
      atributos: {
        ataque: 57,
        defesa: 40,
        magia: 50
      }
    }),
    (carta9 = {
      nome: "Oddish",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
      atributos: {
        ataque: 50,
        defesa: 55,
        magia: 30
      }
    }),
    (carta10 = {
      nome: "Vulpix",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
      atributos: {
        ataque: 41,
        defesa: 40,
        magia: 65
      }
    })
  ];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numCartaMaquina];
  
    var numCartaJogador = parseInt(Math.random() * cartas.length);
    while (numCartaJogador == numCartaMaquina) {
      numCartaJogador = parseInt(Math.random() * cartas.length);
    }
    cartaJogador = cartas[numCartaJogador];
  
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
  