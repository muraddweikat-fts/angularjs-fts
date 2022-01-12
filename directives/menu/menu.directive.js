function MenuDirective() {
  return {
    restrict: 'AE',
    templateUrl: './menu.template.html',
    scope: {
      menu: '=',
    },
  };
}
export default MenuDirective;
