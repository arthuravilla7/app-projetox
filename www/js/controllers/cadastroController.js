angular.module('app').controller('cadastroCtrl' , cadastroCtrl);

function cadastroCtrl($scope, apiService, $state, constantes, $ionicPopup) {
	//0 empresa, 1 profissional, 2 cliente
	$scope.funcoes = [{nome: "empresa", valor: 0}, {nome: "profissional", valor: 1}, {nome: "cliente", valor: 2}];
	$scope.listaProfissoes = [];

	apiService.get(constantes.baseUrlOpenAPI + constantes.oapiObterProfissoes).then(function(result){
		$scope.listaProfissoes = result.data;
	});

	$scope.cadastrarCliente = function(cliente){
		apiService.post(constantes.baseUrlOpenAPI + constantes.oapiCriarCliente, cliente).then(function(result){
			console.log(result);
			$scope.cliente = {};
			showAlert("Atenção", "Usuário cliente cadastrado!");
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}

	$scope.cadastrarEmpresa = function(empresa){
		apiService.post(constantes.baseUrlOpenAPI + constantes.oapiCriarEmpresa, empresa).then(function(result){
			console.log(result);
			$scope.empresa = {};
			showAlert("Atenção", "Usuário empresa cadastrado!");
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}

	$scope.cadastrarProfissional = function(profissional){
		apiService.post(constantes.baseUrlOpenAPI + constantes.oapiCriarProfissional, profissional).then(function(result){
			console.log(result);
			$scope.profissional = {};
			showAlert("Atenção", "Usuário profissional cadastrado!");
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}

	function showAlert(titulo, template) {
	   	var alertPopup = $ionicPopup.alert({
		    title: titulo,
		    template: template
	   	});
	};

	$scope.voltarHome = function(){
      	$state.go('login');
  	};
}
