import angular from 'angular';
import '@uirouter/angularjs';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeController', HomeCtrl);

homeModule.controller('HomeToasterController', function () {});

export default homeModule;
