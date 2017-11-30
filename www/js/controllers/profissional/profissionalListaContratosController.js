angular.module('app').controller('profissionalListaContratosCtrl' , ProfissionalListaContratosCtrl);

function ProfissionalListaContratosCtrl($scope, $state, constantes, apiService, profissionalService, $ionicModal, $ionicPopup) {

	$scope.profissional = profissionalService.getProfissional();
	$scope.listaAtividades = [];
	var atividadeResponsavelId = null;
	var movimentoResponsavelId = null;
	$scope.atividadeSelecionada = {};
	$scope.movimento = {};
	$scope.acompanhamento = {};

	function carregaListaAtividades(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterAtividadesPorProfissional + "/" + $scope.profissional.id).then(function(result){
			$scope.listaAtividades = result.data;
		}, function(error){
			console.log(error);
		});
	}
	carregaListaAtividades();

  	function criarMovimento(movimento){
  		apiService.post(constantes.baseUrlAPI + constantes.apiCriarMovimento, movimento).then(function(result){
  			showAlert('Atenção', 'Movimento criado!');
  			$scope.movimento.descricao = "";
  			//movimento = {};
  			carregaListaAtividades();
  		}, function(error){
  			console.log(error);
  		});
  	};

  	function criarFollowUp(acompanhamento){
  		apiService.post(constantes.baseUrlAPI + constantes.apiCriarAcompanhamento, acompanhamento).then(function(result){
  			movimentoIndex = $scope.atividadeSelecionada.movimentos.findIndex(function(mov){
  				return mov.id === result.data.movimento_responsavel;
  			});
  			$scope.atividadeSelecionada.movimentos[movimentoIndex].movimento_follow_ups.push(result.data);

  			$scope.fecharModalFollowUp();
  			$scope.acompanhamento.descricao = "";
  			$scope.acompanhamento.data_execucao = "";
  			showAlert('Atenção', 'Acompanhamento criado!');
  			
  		}, function(error){
  			console.log(error);
  		});
  	}


  	$scope.voltarHome = function(){
      	$state.go('profissionalhome');
  	};

  	$scope.getDataFormatada = function(data){
    	return moment(data).format('LL');
  	}


  	//********************** criacao de modais
  		$ionicModal.fromTemplateUrl('modalMovimento.html', {
	    	scope: $scope,
	    	animation: 'slide-in-up'
		}).then(function(modal) {
    		$scope.modal = modal;
  		});

	  	$scope.abrirModalMovimento = function(atividadeResponsavel) {
	  		atividadeResponsavelId = atividadeResponsavel;
	    	$scope.modal.show();
	  	};
	  	$scope.fecharModalMovimento = function() {
	  		$scope.movimento = {};
	   		$scope.modal.hide();
	  	};

	  	$ionicModal.fromTemplateUrl('modalListaMovimentos.html',{
	  		scope: $scope,
	    	animation: 'slide-in-up'
	  	}).then(function(modal){
	  		$scope.modalListaMovimentos = modal;
	  	});

	  	$scope.abrirModalListaMovimentos = function(atividadeSelecionada) {
	  		$scope.atividadeSelecionada = atividadeSelecionada;
	    	$scope.modalListaMovimentos.show();
	  	};
	  	$scope.fecharModalListaMovimentos = function() {
	  		$scope.atividadeSelecionada = {};
	   		$scope.modalListaMovimentos.hide();
	  	};

	  	$ionicModal.fromTemplateUrl('modalFollowUp.html',{
	  		scope: $scope,
	    	animation: 'slide-in-up'
	  	}).then(function(modal){
	  		$scope.modalFollowUp = modal;
	  	});

	  	$scope.abrirModalFollowUp = function(movimentoResponsavel){
	  		movimentoResponsavelId = movimentoResponsavel;
	  		$scope.modalFollowUp.show();
	  	}

	  	$scope.fecharModalFollowUp = function(){
	  		$scope.modalFollowUp.hide();
	  	}

	//********************fim da criacao de modais  	

  	//pop-ups de confirmação
  	$scope.abrirConfirmacaoCriarMovimento = function(movimento){
		var myPopup = $ionicPopup.show({
		    title: 'Atenção',
		    subTitle: 'Confirma a criação do movimento?',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancelar' },
		      {
		        text: '<b>Sim</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		        	movimento.atividade_responsavel = atividadeResponsavelId;
		        	criarMovimento(movimento);  

		        }
		      }
		    ]
	 	});
	}

	$scope.abrirConfirmacaoCriarFollowUp = function(acompanhamento){
		var myPopup = $ionicPopup.show({
		    title: 'Atenção',
		    subTitle: 'Confirma a criação do acompanhamento?',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancelar' },
		      {
		        text: '<b>Sim</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		        	acompanhamento.movimento_responsavel = movimentoResponsavelId;
		        	criarFollowUp(acompanhamento);  

		        }
		      }
		    ]
	 	});
	}

	function showAlert(titulo, template) {
	   	var alertPopup = $ionicPopup.alert({
		    title: titulo,
		    template: template
	   	});

	};
	
}