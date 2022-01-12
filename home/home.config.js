function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'home/template.html',
    })
    .state('otherwise', {
      url: '/',
      template: 'Otherwise',
    });
}

export default HomeConfig;
