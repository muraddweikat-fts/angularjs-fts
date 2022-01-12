import angular from 'angular';
import '@uirouter/angularjs';

// Create the module where our functionality can attach to
let aboutModule = angular.module('about', []);

// Include our UI-Router config settings
import AboutConfig from './about.config';
aboutModule.config(AboutConfig);

// Controllers
import AboutController from './about.controller';
aboutModule.controller('AboutController', AboutController);

export default aboutModule;
