import angular from 'angular';

// Create the module where our functionality can attach to
const directivesModule = angular.module('directives', []);

// Directives
import './menu/menu.directive';
import './arrow/arrow.directive';
import './navbar/navbar.directive';
import './counter/counter.directive';

export default directivesModule;
