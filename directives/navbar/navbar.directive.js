angular.module('directives').directive('r365Navbar', NabvarDirective);

function NabvarDirective() {
  return {
    restrict: 'AE',
    templateUrl: './navbar.template.html',
    scope: {
      title: '@',
      leftMenu: '=',
      rightMenu: '=',
    },
  };
}

export default NabvarDirective;
