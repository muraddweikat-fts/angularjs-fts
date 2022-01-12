import angular from 'angular';

const servicesModule = angular.module('services', []);

servicesModule.factory('CounterService', function () {
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

export default servicesModule;
