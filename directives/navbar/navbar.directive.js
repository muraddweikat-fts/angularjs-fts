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
