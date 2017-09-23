import { <%= upModuleName %>Controller } from './<%= module %>-<%= name %>.controller';

export function <%= moduleName %>Directive() {
  return {
    scope: {},
    restrict: "AE",
    bindToController: true,
    controllerAs: '$ctrl',
    template: require('./<%= module %>-<%= name %>.directive.html'),
    controller: <%= upModuleName %>Controller
  }
};