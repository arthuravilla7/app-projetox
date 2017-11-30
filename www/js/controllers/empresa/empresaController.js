angular.module('app').controller('empresaCtrl', EmpresaCtrl);

function EmpresaCtrl($scope, $state, empresaService) {

	$scope.empresa = empresaService.getEmpresa();

	$scope.irListaProfissionais = function(){
		$state.go('empresalistaprofissionais');
	};

	$scope.irPesquisaProfissional = function(){
		$state.go('empresapesquisaprofissional');
	}

	$scope.irListaContratos = function(){
		$state.go('empresalistacontratos');
	}

	$scope.irCriaContratos = function(){
		$state.go('empresacriacontratos');
	}

	$scope.voltarHome = function(){
      		$state.go('login');
  	};

}