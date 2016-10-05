namespace RoutingSecurityApp {
    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource("/api/movies");
        }
    }
    angular.module("RoutingSecurity").service("movieService", MovieService);

    export class AccountService {
        public isLoggedIn() {
            return false;
        }
    }

    angular.module("RoutingSecurity").service("accountService", AccountService);
}
