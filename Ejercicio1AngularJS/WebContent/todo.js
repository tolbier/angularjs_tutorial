var app = angular.module('TodoApp', []);
app.controller('TodoCtrl', function($scope) {
	
	$scope.todos = [
	      {text:'learn angular', done:false},
	      {text:'build an angular app', done:false}];

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	}
	
	$scope.addTodo = function(){
		if (! $scope.formTodoText) return; 
		$scope.todos.push({text:$scope.formTodoText,done:false});
		$scope.formTodoText='';
	}

	$scope.clearCompleted = function(){
 
		$scope.todos = $.grep($scope.todos, function(todo) {
		    return !todo.done;
		});


	}
});

