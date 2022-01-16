import angular from 'angular';

export default angular
  .module('services')
  .factory('CounterService', function () {
    let count = 0;
    return {
      incrementCount,
      getCount,
    };

    function incrementCount() {
      count = count + 1;
    }

    function getCount() {
      return count;
    }
  });
