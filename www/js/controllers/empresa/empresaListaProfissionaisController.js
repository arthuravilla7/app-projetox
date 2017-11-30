angular.module('app').controller('empresaListaProfissionaisCtrl', empresaListaProfissionaisCtrl);

function empresaListaProfissionaisCtrl($scope, $state, empresaService, constantes, apiService, $ionicPopup) {

	$scope.listaProfissionais = [];
	$scope.empresa = empresaService.getEmpresa();

	function obterProfissionaisAssociados(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterProfissionaisPorEmpresa, $scope.empresa.id).then(function(result){
			$scope.listaProfissionais = result.data;
		});
	};
	obterProfissionaisAssociados();

	$scope.desassociarProfissional = function(profissionalId, indice){
		apiService.post(constantes.baseUrlAPI + constantes.apiDesassociarProfissional, {"profissionalId": profissionalId}).then(function(result){
			$scope.listaProfissionais.splice(indice, 1);
		}, function(error){
			console.log(error);
		});
	};

	//******************** pop ups e modais *********************************

	var exibirConfirmacaoDesassociacao = function() {
	   		var alertPopup = $ionicPopup.alert({
	    		title: 'Atenção',
	     		template: 'O profissional foi desassociado!'
	   		});

	   /*alertPopup.then(function(res) {
	     console.log('Thank you for not eating my delicious ice cream cone');
	   });*/
	};	

	$scope.abrirConfirmacaoDesassociarProfissional = function(profissionalId, indice){
		var myPopup = $ionicPopup.show({
		    title: 'Atenção',
		    subTitle: 'Confirma a desassociação do profissional?',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancelar' },
		      {
		        text: '<b>Sim</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		        	$scope.desassociarProfissional(profissionalId, indice)  

		        }
		      }
		    ]
	 	});

	 	myPopup.then(function(res) {
    		//console.log('Tapped!', res);
  		});
	}

	$scope.voltarHome = function(){
		$state.go('empresahome');
	}
}