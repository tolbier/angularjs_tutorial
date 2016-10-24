
app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', 
	function($scope, suggestions, $routeParams) {
		$scope.post = suggestions.posts[$routeParams.id];
		$scope.addComment = function() {
			  // if input empty, don't submit
	        if (!$scope.commentBody || $scope.commentBody === "") {
	          return;
	        }

			$scope.post.comments.push({
				body:$scope.commentBody,
				upvotes:0
			});

	        // after submit, clear input
			$scope.commentBody = '';
			

		};
		$scope.upVoteComment = function(comment) {
			comment.upvotes++;
		};
}]);

