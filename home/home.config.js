function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'home/template.html',
    })
    .state('otherwise', {
      url: '',
      controller: 'HomeController',
      templateUrl: 'home/template.html',
    });
}

export default HomeConfig;
