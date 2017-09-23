import { module } from 'angular';
import { <%= moduleName %>Component } from './<%= module %>-<%= name %>.component';

export const <%= moduleName %>Module = module('<%= moduleName %>Module', [])
.component('<%= moduleName %>', <%= moduleName %>Component)
.name;