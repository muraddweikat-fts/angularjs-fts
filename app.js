import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Directives
import './directives';

// Services
import './services';

// Pages
import './views/home';
import './views/about';

// Create and bootstrap application
const requires = ['ui.router', 'directives', 'services', 'home', 'about'];

window.app = angular
  .module('app', requires)
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  });

angular.bootstrap(document.getElementById('app'), ['app']);
