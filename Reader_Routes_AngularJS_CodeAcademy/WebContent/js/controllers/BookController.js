app.controller('BookController', ['$scope', 'books' ,'$routeParams', function($scope, books, $routeParams) {
  // Your code here
   books.success(function(data) {
			$scope.book = data[$routeParams.bookId];
      $scope.currentBookIndex = parseInt($routeParams.bookId);
		});

}]);
