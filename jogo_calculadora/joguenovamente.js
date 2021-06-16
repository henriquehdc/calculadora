function joguenovamente() {
	
	this.preload = function () {
		game.load.image("fundo1", "FUNDOESPACO.jpeg");	
		game.load.spritesheet("et2", "Fileira2.png", 200, 200);
		game.load.image("playagain", "PlayAgain2.png");
		game.load.audio("somfinal","funk-triste-original.mp3");
		
	};
	
	this.create = function () {	
		
		if (numerofase == 1){
				score = 0;
		}
			
		function menu() {
		som4.stop();
		game.state.start("menu");		
		}  
		var estilo4 = {
			font: "normal 30px 'Press Start 2P'",
			fill: "#ffffff"
		};
						
		game.add.tileSprite(0, 0, 800, 600, "fundo1");
			
		et2 = game.add.sprite(300, 0, "et2");
		et2.animations.add("andando", [0,1,2, 3,4,5,5,4,3,2,1,], 7, true);
		et2.animations.play("andando");
			
	 		
		numerofase = numerofase -1;
		textoscore =	game.add.text(300,240,"SCORE:" +score , estilo4);
		textoscore =	game.add.text(150,270,"fases concluidas:" +numerofase  , estilo4);
		
		playagain =	game.add.image(160,380, "playagain");		
		playagain.inputEnabled = true;
		playagain.input.useHandCursor = true;
		playagain.events.onInputDown.add(menu);			 	
	};
		
	this.update = function () {			
	};	
}
