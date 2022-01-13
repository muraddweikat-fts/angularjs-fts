angular.module('directives').directive('r365Menu', MenuDirective);

function MenuDirective() {
  return {
    restrict: 'AE',
    templateUrl: './menu.template.html',
    scope: {
      menu: '=',
    },
    link($scope) {
      $scope.isVisible = (menuItem) => {
        if (typeof menuItem.isHidden === 'function') {
          return !menuItem.isHidden();
        } else {
          return !menuItem.isHidden;
        }
      };
    },
  };
}
export default MenuDirective;
