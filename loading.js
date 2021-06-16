function loading() {
		
	this.preload = function () {
		game.load.image("fundo1", "FUNDOESPACO.jpeg");
		game.load.image("gameboy", "Gameboydetalhado.png");
		game.load.spritesheet("et", "Fileira1.png", 200, 200);	
	};
	
	this.create = function () {
	     contadorloading = 0;
		 
	 		
		game.add.tileSprite(0, 0, 800, 600, "fundo1");
		game.add.tileSprite(200, 0, 400, 600, "gameboy");
		
		//sprite alien dançando
		et = game.add.sprite(270, 60, "et");		
		et.animations.add("andando", [0, 1, 2, 3, 4, 5], 8, true);
		et.animations.play("andando");
					
	};
	
	this.update = function () {
		
		function tela1() {
		game.state.start("tela1");		
		} 
		
		contadorloading++;
		
		if (contadorloading > 100){
				tela1();			
			}		
	};
	
}
