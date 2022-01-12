function MenuDirective() {
  return {
    restrict: 'AE',
    controller: MenuController,
    templateUrl: './menu.template.html',
    scope: {
      menu: '=',
    },
  };
}

function MenuController($scope, $element, $attrs) {}

export default MenuDirective;
