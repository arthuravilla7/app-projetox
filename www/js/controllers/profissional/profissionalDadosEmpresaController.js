angular.module('app').controller('profissionalDadosEmpresaCtrl' , profissionalDadosEmpresaCtrl);

function profissionalDadosEmpresaCtrl($scope, $state, profissionalService) {
		$scope.profissional = profissionalService.getProfissional();
		console.log($scope.profissional);

		$scope.voltarHome = function(){
      		$state.go('profissionalhome');
  		};

}