

const scriptsInEvents = {

	async EventoGameplay1_Event2_Act3(runtime, localVars)
	{
		//obter o valor da variável global vidas
		let vidas  = runtime.globalVars.vidas;
		
		//reduzir uma vida
		vidas --;
		
		//atualiza a vairavel global no construct
		
		runtime.globalVars.vidas = vidas;
	},

	async EventoGameplay1_Event9_Act2(runtime, localVars)
	{
		//obter o valor da variável global vidas
		let vidas  = runtime.globalVars.vidas;
		
		//reduzir uma vida
		vidas --;
		
		//atualiza a vairavel global no construct
		
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegar a 0
		
		if(vidas <= 0){
		console.log("Game Over");
		runtime.goToLayout("Tela Game Over")
		}
	},

	async EventoGameplay1_Event20_Act2(runtime, localVars)
	{
		//obter o valor da variável global vidas
		let vidas  = runtime.globalVars.vidas;
		
		//reduzir uma vida
		vidas --;
		
		//atualiza a vairavel global no construct
		
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegar a 0
		
		if(vidas <= 0){
		console.log("Game Over");
		runtime.goToLayout("Tela Game Over")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
