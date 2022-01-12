import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Directives
import './directives';

// Pages
import './views/home';
import './views/about';

// Create and bootstrap application
const requires = ['ui.router', 'directives', 'home', 'about'];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);
