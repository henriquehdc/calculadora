function gameover() {
	
	this.preload = function () {
		game.load.image("fundo1", "FUNDOESPACO.jpeg");	
		game.load.spritesheet("et2", "Fileira2.png", 200, 200);
		game.load.image("gameover!", "GameOver1.png");
		game.load.audio("somfinal","funk-triste-original.mp3");		
	};
	
	this.create = function () {	
		 contadorloading1 = 0;
		 
		//som de fim de jogo
		som4 = game.add.audio("somfinal",1,true);
		som4.play();
						 					
		game.add.tileSprite(0, 0, 800, 600, "fundo1");
		
		//sprite alien dançando	
		et2 = game.add.sprite(300, 0, "et2");
		et2.animations.add("andando", [0,1,2, 3,4,5,5,4,3,2,1,], 7, true);
		et2.animations.play("andando");
		
	    game.add.image(165,170, "gameover!");
	    
	 	
	 fadeIn();					 	
	};
		
	this.update = function () {
	
		function joguenovamente() {	
		game.state.start("joguenovamente");		
	}	
	
		contadorloading1++;
		if ( contadorloading1 > 200){
			joguenovamente();
		}						
	};	
		
}
