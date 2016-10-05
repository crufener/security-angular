namespace RoutingSecurityApp {
    angular.module("RoutingSecurity", ["ui-router", "ngResource"]).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "/ngApp/home.html"
            })
            .state("secret", {
                url: "/secret",
                templateUrl: "ngApp/secret/html",
                data: {
                    requireAuthentication: true
                }
            })
            .state("public", {
                url: "/public",
                templateUrl: "/ngApp/public.html"
            })
            .state("login", {
                url: "/login",
                templateUrl: "/ngApp/login.html"
            });
        $locationProvider.html5Mode(true);
    });

    angular.module("RoutingSecurity").run((
        $rootScope: ng.IRootScopeService,
        $state: ng.ui.IStateService,
        accountService: RoutingSecurityApp.Services.AccountService
    ) => {
            $rootScope.$on("$stateChangeStart", (e, to) => {
                //protect non-public views
                if (to.data && to.data.requireAuthentication) {
                    if (!accountService.isLoggedIn()) {
                        e.preventDefault();
                        $state.go("login");
                    }
                }
            });
    });
}
