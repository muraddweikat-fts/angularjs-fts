function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('about', {
    url: '/about',
    controller: 'AboutController',
    templateUrl: 'views/about/template.html',
  });
}

export default AboutConfig;
