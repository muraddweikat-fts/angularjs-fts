function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('home', {
    url: '/home',
    controller: 'HomeController',
    templateUrl: 'views/home/template.html',
  });
}

export default HomeConfig;
