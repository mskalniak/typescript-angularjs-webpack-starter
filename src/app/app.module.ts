import * as angular from "angular";
import uiRouter from "angular-ui-router";

// styles
import '../less/all.less';  

import { configureRoutes } from "./app.routes";
import { msComponents } from "./components/components.module";

export const taxCubePlCit = angular.module("msApp", [
    uiRouter,
    msComponents
])
.config(configureRoutes)
.name;

