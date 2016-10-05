var RoutingSecurityApp;
(function (RoutingSecurityApp) {
    var MovieService = (function () {
        function MovieService($resource) {
            this.MovieResource = $resource("/api/movies");
        }
        MovieService.prototype.listMovies = function () {
            return this.MovieResource.query();
        };
        return MovieService;
    }());
    RoutingSecurityApp.MovieService = MovieService;
    angular.module("RoutingSecurity").service("movieService", MovieService);
    var AccountService = (function () {
        function AccountService() {
        }
        AccountService.prototype.isLoggedIn = function () {
            return false;
        };
        return AccountService;
    }());
    RoutingSecurityApp.AccountService = AccountService;
    angular.module("RoutingSecurity").service("accountService", AccountService);
})(RoutingSecurityApp || (RoutingSecurityApp = {}));
