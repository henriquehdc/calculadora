var telas = ["menu","tela1","loading","gameover","joguenovamente"];
var larguraJogo = 800;
var alturaJogo = 600;
var score = 0;
var scoreanterior = 0;
var numerofase = 0;
var som;

function menu() {
	
	this.preload = function () {
		game.load.image("fundo1", "FUNDOESPACO.jpeg");
		game.load.image("teste", "Gameboydetalhado.png");
		game.load.audio("musica","abertura-de-a-grande-familia-em-8-bits.mp3" );
		game.load.audio("musicafundo","aonde-e-o-mandela-versao-8bits.mp3");
		game.load.image("botaostart","botaostart.png");
		
	};
	
	this.create = function () {
		numerofase = 0;
		var contadorloading = 0;
		
		//som musica tela inicial	
		som = game.add.audio("musica",1,true);						
		som.play();
				
		//telas background	
		game.add.tileSprite(0, 0, 800, 600, "fundo1");
		game.add.tileSprite(200, 0, 400, 600, "teste");
		
		//Botão start
		start= game.add.image(265, 130, "botaostart");
		start.inputEnabled = true;
		start.input.useHandCursor = true;
		start.events.onInputDown.add(startClicado);
					
		fadeIn();					
	};
	
	this.update = function () {
				
	};
		
	function startClicado() {		
		fadeOut(tela1);			
	}
	
	function tela1() {
		som.stop();
		som2 = game.add.audio("musicafundo",1,true);
		som2.play();
		score = 0;
		game.state.start("tela1");
	}  		
}
