angular
  .module('directives')
  .directive('r365Counter', ['CounterService', CounterDirective]);

function CounterDirective(CounterService) {
  CounterController.$inject = ['$scope'];
  function CounterController($scope) {
    CounterService.incrementCount();
    $scope.count = CounterService.getCount();
  }
  return {
    restrict: 'AE',
    controller: CounterController,
    templateUrl: './counter.template.html',
  };
}
export default CounterDirective;
