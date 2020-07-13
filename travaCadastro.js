
	function validaCadastro(){
		let validaNome = document.querySelector('#NomeUsuario');
		let validaPrioridade = document.querySelector('#st_prioridadeChamado');
		let validaComplexidade = document.querySelector('#st_prioridadeChamado');
		let validaTicket = document.querySelector('#Ticket');
		let validaObs = document.querySelector('#st_obs');

		if(validaNome == ''){
			alert('Preencha o campo Nome de usuário');
			
		}

		if(!validaPrioridade.checkead){
			alert('Selecione a prioridade do chamado');
			
		}

		if(!validaComplexidade.checkead){
			alert('Selecione a complexidade do chamado');
			
		}

		if(validaTicket == ''){
			alert('Informe o seu ticket');
		}

		if(validaObs == ''){
			alert('Descreva o problema no campo observação');
		}

}