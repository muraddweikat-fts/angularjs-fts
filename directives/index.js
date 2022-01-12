import angular from 'angular';

// Create the module where our functionality can attach to
let directivesModule = angular.module('directives', []);

// Directives
import MenuDirective from './menu/menu.directive';
import ArrowDirective from './arrow/arrow.directive';
import NabvarDirective from './navbar/navbar.directive';

directivesModule.directive('r365Menu', MenuDirective);
directivesModule.directive('r365Arrow', ArrowDirective);
directivesModule.directive('r365Navbar', NabvarDirective);

export default directivesModule;
