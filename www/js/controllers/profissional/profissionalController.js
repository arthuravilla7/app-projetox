angular.module('app').controller('profissionalCtrl' , profissionalCtrl);

function profissionalCtrl($scope, $state) {

	$scope.irListaContrato = function(){
		$state.go('profissionallistacontratos');
	}
  
  	$scope.irDadosEmpresa = function(){
  		$state.go('profissionadadosempresa');
  	}

  	$scope.voltarHome = function(){
      		$state.go('login');
  	};
}