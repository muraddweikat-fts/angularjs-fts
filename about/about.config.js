function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('about', {
    url: '/about',
    controller: 'AboutController',
    templateUrl: 'about/template.html',
  });
}

export default AboutConfig;
