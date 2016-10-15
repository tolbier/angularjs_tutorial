app.directive('installApp', function() { 
  return { 
    restrict: 'E', 
    scope: { }, 
    templateUrl: 'js/directives/installApp.html',
    link:function(scope, element, attrs) { 
		  	scope.buttonText = "Install";
  			scope.installed = false;

  			scope.download = function() { 
	    		element.toggleClass('btn-active'); 
      			scope.installed = !scope.installed;
      			scope.buttonText=scope.installed?"Uninstall":"Install";
  			} ;
		}
  	}; 
});