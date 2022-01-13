function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeController',
    templateUrl: 'views/home/template.html',
  });
}

export default HomeConfig;
