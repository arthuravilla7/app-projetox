angular.module('app').controller('empresaCriaContratosCtrl', EmpresaCriaContratosCtrl);

function EmpresaCriaContratosCtrl($scope, $state, empresaService, apiService, constantes, $ionicPopup) {

	$scope.empresa = empresaService.getEmpresa();
	$scope.listaProfissionais = [];
	$scope.listaClientes = [];

	function obterProfissionaisAssociados(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterProfissionaisPorEmpresa, $scope.empresa.id).then(function(result){
			$scope.listaProfissionais = result.data;
		});
	};
	obterProfissionaisAssociados();

	function obterClientes(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterClientes).then(function(result){
			$scope.listaClientes = result.data;
		});
	}
	obterClientes();

	function criarAtividade(atividade){
		apiService.post(constantes.baseUrlAPI + constantes.apiCriarAtividade, atividade).then(function(result){
			showAlert('Atenção', 'Atividade cadastrada!');
			$state.go('empresahome');
		}, function(error){
			console.log(error);
		});
	}

	$scope.abrirConfirmacaoCriarAtividade = function(atividade){
		var myPopup = $ionicPopup.show({
		    title: 'Atenção',
		    subTitle: 'Confirma a criação da atividade?',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancelar' },
		      {
		        text: '<b>Sim</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		        	criarAtividade(atividade);  

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

	$scope.voltarHome = function(){
		$state.go('empresahome');
	}

}