angular.module('app').controller('empresaPesquisaProfissionaisCtrl', empresaPesquisaProfissionaisCtrl);

function empresaPesquisaProfissionaisCtrl($scope, $state, $ionicPopup, empresaService, constantes, apiService) {

	$scope.empresa = empresaService.getEmpresa();
	$scope.listaProfissionais = [];

	function obterListaProfissionai(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterProfissionaisSemEmpresa).then(function(result){
			$scope.listaProfissionais = result.data;
		});
	}
	obterListaProfissionai();

	$scope.buscarPorFiltro = function(filtroBusca){
		if(!filtroBusca)
			obterListaProfissionai();
		else{
			apiService.get(constantes.baseUrlAPI + constantes.apiObterProfissionaisSemEmpresaComFiltro + "/" + filtroBusca).then(function(result){
				console.log(result);
				$scope.listaProfissionais = result.data;
			});
		}
	}

	function associarProfissional(profissionalId, indice){
		apiService.post(constantes.baseUrlAPI + constantes.apiAssociarProfissional, {"profissionalId": profissionalId, "empresaId": $scope.empresa.id}).then(function(result){
			$scope.listaProfissionais.splice(indice, 1);
			exibirConfirmacaoAssociacao();
		}, function(error){
			console.log(error);
		})
	}
	

	$scope.voltarHome = function(){
		$state.go('empresahome');
	}

	//*********************** pop ups e modais ***************************************
	$scope.abrirConfirmacaoAssociarProfissional = function(profissionalId, indice){
		var myPopup = $ionicPopup.show({
		    title: 'Atenção',
		    subTitle: 'Confirma a associação do profissional?',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancelar' },
		      {
		        text: '<b>Sim</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		        	associarProfissional(profissionalId, indice)  

		        }
		      }
		    ]
	 	});

	 	myPopup.then(function(res) {
    		//console.log('Tapped!', res);
  		});
	}

	var exibirConfirmacaoAssociacao = function() {
	   		var alertPopup = $ionicPopup.alert({
	    		title: 'Atenção',
	     		template: 'O profissional foi associado!'
	   		});

	   /*alertPopup.then(function(res) {
	     console.log('Thank you for not eating my delicious ice cream cone');
	   });*/
	};	

}