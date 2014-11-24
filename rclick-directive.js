var app = angular.module('angularRightClick', []);

app.directive('ngRclick', function($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            if(attrs.rfunction && typeof($parse(attrs.rfunction)) === "function"){
                var fn = $parse(attrs.rfunction);
                // Capture the rightClick          
                element.bind('contextmenu', function(event) {
                    // Tell Angular that asynch event is occurred
                    scope.$apply(function() {
                        // Stop the event propagations
                        event.preventDefault();
                        fn(scope, {$event:event});
                    });
                });
            } else {
                console.log('You must declare a function in rfunction');
            }
        }
    }
});
