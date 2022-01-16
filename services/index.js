import angular from 'angular';

const servicesModule = angular.module('services', []);

import './counter.service';
import './toastr/toastr.service';

export default servicesModule;
