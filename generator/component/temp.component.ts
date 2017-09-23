import { <%= upModuleName %>Controller } from './<%= module %>-<%= name %>.controller';

export const <%= moduleName %>Component = {
  bindings: {},
  template: require('./<%= module %>-<%= name %>.component.html'),
  controller: <%= upModuleName %>Controller
};
