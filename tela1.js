function tela1() {
	var textotimer;
	var horaAnterior;
	var milissegundosRestantes;
	var teste;
		
	this.preload = function () {
		
		//telas background, imagens e audio carregar			
		game.load.image("fundo1", "FUNDOESPACO.jpeg");
		game.load.image("fundo2", "Gameboydetalhado.png");
		game.load.image("relogio","relogio.png");
		game.load.audio("errou","erou-sound-effect-br.mp3");
		game.load.spritesheet("alien", "etzinho.png",112,87);
		game.load.spritesheet("vaca", "vaca.png",109,91);
		
	};
	
	this.create = function () {
		
		numerofase++;
		contadorloading = 0;
		
		//som de errou
		som3 = game.add.audio("errou",4);
						
		//telas background	
		game.add.tileSprite(0, 0, 800, 600, "fundo1");
		game.add.tileSprite(200, 0, 400, 600, "fundo2");
		
		//gif transformados em spritesheet
		relogiogif= game.add.sprite(50,200, "relogio1");
		relogiogif.scale.setTo(0.2,0.2);
		relogiogif.animations.add("andando", [], 10, true);
		relogiogif.animations.play("andando");
	
		et = game.add.sprite(20,400, "alien");
		et.animations.add("andando", [], 20, true);
		et.animations.play("andando");
		
		vaca = game.add.sprite(650,150, "vaca");
		vaca.animations.add("dance", [], 10, true);
		vaca.animations.play("dance");
		
		relogio=game.add.image(320,253, "relogio");
		relogio.scale.setTo(0.09,0.09);
		
		// tipo de letras
		var estilo = {
			font: "normal 23px 'Press Start 2P'",
			fill: "#ffffff",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		};
		
		var estilo2 = {
			font: "normal 28px 'Press Start 2P'",
			fill: "#ffffff",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		};
		
		var estilo3 = {
			font: "normal 20px 'Press Start 2P'",
			fill: "#ffffff",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		};
		
		//gerador de variaveis	
		var	textcalculo ;
		textcalculo = game.add.text (264, 155 , "" , estilo2);
		textcalculo.setTextBounds(115, -10,50,50);
		var calculo = [-1,-2,-3,-4,-5,-6,-7,-8,-9,+1,+2,+3,+4,+5,+6,+7,+8,+9];
		
		var x = Math.trunc(Math.random() * 18);
		var	y = Math.trunc(Math.random() * 18);
		var	z = Math.trunc(Math.random() * 18);
		
		var textoresposta = calculo[x];
		
		if (calculo[y] < 0) {
			textoresposta = textoresposta + " - " + (-calculo[y]);
		} else {
			textoresposta = textoresposta + " + " + calculo[y];
		}
		
		if (calculo[z] < 0) {
			textoresposta = textoresposta + " - " + (-calculo[z]);
		} else {
			textoresposta = textoresposta + " + " + calculo[z];
		}
		
		textcalculo.setText(textoresposta);
		
		//confere a resposta pra ajuda os burro	quando tira do comentário	
		var resposta = calculo[x] + calculo[y] + calculo[z];	
		//textresposta = game.add.text (480, 210 , resposta, estilo2);
				
		//gerador de respostas aleatórias
		var textalternativa = new Array(4);
		var alternativa = Math.trunc(Math.random() * 4);
		var alternativaclicada;
		var coordx = [370, 456, 370, 282];
		var coordy = [340, 400, 470, 408];
		
		for (var i = 0; i < 4; i++) {
			
			textalternativa[i] = game.add.text( coordx[i], coordy[i], " " , estilo3);
			textalternativa[i].setTextBounds(0, 0, 60, 60);
			textalternativa[i].inputEnabled = true;
			textalternativa[i].input.useHandCursor = true;
			
			textalternativa[i].setText( resposta + (i - alternativa) );
			
			if (i == alternativa) {
				textalternativa[i].events.onInputDown.add(fadeLoading);
			} else {
				textalternativa[i].events.onInputDown.add(fadeGameover);
			}			
		}
				
		//timer					
		textotimer = game.add.text(248, 253, "", estilo);
		milissegundosRestantes = 8000;	
		horaAnterior = game.time.now;		
		if ( numerofase >= 6 && numerofase <=12){
			milissegundosRestantes = 6000;
			}else {
				if (numerofase >= 13  )
				milissegundosRestantes = 4000;				
				}
								
		//score		
		textoscore = game.add.text ( 500, 63 ,"", estilo);
		textoscore.setTextBounds(0, 0,25, 25);
		scoreanterior = score;
		
		fadeIn();		
	};
	
	this.update = function () {
		
		//timer
		var horaAtual = game.time.now;
		var delta = horaAtual - horaAnterior;
		horaAnterior = horaAtual;		
		milissegundosRestantes = milissegundosRestantes - delta;
		temporestante = Math.round(milissegundosRestantes / 100);
		textotimer.setText( temporestante / 10 );		
		if(temporestante<0.1 ){	
			som3.play();
			gameover();
			return;
		}
		
		//score		
		score = scoreanterior + (0 + (temporestante * numerofase));
		textoscore.setText( score ); 			
	};
	
	function fadeLoading() {		
		fadeOut(loading);		
	}
	
	function loading() {		
		game.state.start("loading");		
	}
	
	function fadeGameover() {
		som3.play();
		fadeOut(gameover);		
	}
	
	function gameover() {
		som2.stop();
		game.state.start("gameover");		
	}	
}