function NabvarDirective() {
  return {
    restrict: 'AE',
    templateUrl: './navbar.template.html',
    scope: {
      title: '@',
      leftMenu: '=',
      rightMenu: '=',
    },
    link: function ($scope) {
      console.log('Scope', $scope);
    },
  };
}

export default NabvarDirective;
