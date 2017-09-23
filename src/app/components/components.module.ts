import { module } from 'angular';

import { msHomeModule } from "./home/ms-home.module";

export const msComponents = module("msComponents", [
    msHomeModule
])
.name;

