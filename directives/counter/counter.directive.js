function CounterDirective(CounterService) {
  return {
    restrict: 'AE',
    controller: CounterController,
    templateUrl: './counter.template.html',
  };

  CounterController.$inject = ['$scope'];
  function CounterController($scope) {
    CounterService.incrementCount();
    $scope.count = CounterService.getCount();
  }
}
export default CounterDirective;
