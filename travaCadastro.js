
	function validaCadastro(){
		let validaNome = document.querySelector('#NomeUsuario').value;
		let validaPrioridade = document.querySelector('#st_prioridadeChamado').value;
		let validaComplexidade = document.querySelector('#st_prioridadeChamado').value;
		let validaTicket = document.querySelector('#Ticket').value;
		let validaObs = document.querySelector('#st_obs').value;

		if(validaNome == ''){
			alert('Preencha o campo Nome de usuário');	
		}

		if(!validaPrioridade.checked){
			alert('Selecione a prioridade do chamado');	
		}

		if(!validaComplexidade.checked){
			alert('Selecione a complexidade do chamado');	
		}

		if(validaTicket == ''){
			alert('Informe o seu ticket');
		}

		if(validaObs == ''){
			alert('Descreva o problema no campo observação');
		}

	}
