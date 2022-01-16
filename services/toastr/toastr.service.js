import angular from 'angular';
import $ from 'jquery';

export default angular
  .module('services')
  .service('ToastrService', ToastrService);

ToastrService.$inject = ['$controller', '$compile', '$rootScope'];
function ToastrService($controller, $compile, $rootScope) {
  var _self = this;

  // TODO: handle open multi toast
  _self.open = function (configs) {
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

    // Load the toastr template
    if (configs.template) {
      templateDivWrap.html(configs.template);
      handleCompilingAngular();
    } else {
      $(templateDivWrap).load(configs.Test, handleCompilingAngular);
    }

    function handleCompilingAngular() {
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
}
