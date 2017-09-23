import { module } from 'angular';
import { <%= moduleName %>Directive } from './<%= module %>-<%= name %>.directive';

export const <%= moduleName %>Module = module('<%= moduleName %>Module', [])
.directive('<%= moduleName %>', <%= moduleName %>Directive)
.name;