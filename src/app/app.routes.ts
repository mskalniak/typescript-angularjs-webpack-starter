export function configureRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/App/Home");

    $stateProvider
    .state("main", {
        url: "/",
        abstract: true,
    })
    .state("main.app", {
        url: "App",
        abstract: true,
        views: {
            "body@": {
                template: require("./templates/app.html"),
            }
        }
    })
    .state("main.presentation", {
        url: "Presentation",
        abstract: true,
        views: {
            "body@": {
                template: require("./templates/presentation.html"),
            }
        }
    })
    .state("main.app.home", {
        url: "/Home",
        views: {
            "content@main.app": {
                component: 'msHome'
            }
        }
    })
};