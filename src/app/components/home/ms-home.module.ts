import { module } from 'angular';
import { msHomeComponent } from './ms-home.component';

export const msHomeModule = module('msHomeModule', [])
.component('msHome', msHomeComponent)
.name;