import angular from 'angular';
import $ from 'jquery';

export default angular
  .module('services')
  .service('ToastrService', ToastrService);

ToastrService.$inject = ['$controller', '$compile', '$rootScope'];
function ToastrService($controller, $compile, $rootScope) {
  var _self = this;

  // TODO: handle open multi toast
  _self._createToastr = function (configs) {
    var toastrInstance = {
      show: handleShowToastrInDOM,
      configs,
    };
    let sharedScope;

    if (configs.scope) {
      sharedScope = configs.scope.$new();
    } else {
      sharedScope = $rootScope.$new();
    }
    angular.extend(sharedScope, configs.locals);

    if (!$('.toastr').length) {
      $('body')
        .append(angular.element('<div/>').addClass('toastr'))
        .show('slow');
    }
    var templateDivWrap = angular.element($('.toastr'));

    templateDivWrap.html(configs.template);

    return toastrInstance;

    function handleShowToastrInDOM() {
      $('.toastr').addClass('show');
      if (configs.controller) {
        $controller(configs.controller, sharedScope);
      }
      $compile($(templateDivWrap))(sharedScope);

      setTimeout(() => {
        $('.toastr').removeClass('show');
      }, 3000);
    }
  };

  _self.open = function (configs) {
    var toastrInstance = _self._createToastr({
      templateUrl: './default.template.html',
      ...configs,
    });
    return toastrInstance.show();
  };
}
