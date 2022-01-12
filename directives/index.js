import angular from 'angular';

// Create the module where our functionality can attach to
const directivesModule = angular.module('directives', []);

// Directives
import MenuDirective from './menu/menu.directive';
import ArrowDirective from './arrow/arrow.directive';
import NabvarDirective from './navbar/navbar.directive';
import CounterDirective from './counter/counter.directive';

directivesModule.directive('r365Menu', MenuDirective);
directivesModule.directive('r365Arrow', ArrowDirective);
directivesModule.directive('r365Navbar', NabvarDirective);
directivesModule.directive('r365Counter', ['CounterService', CounterDirective]);

export default directivesModule;
