import { PeopleCtrl } from "./controllers/people";
import { UserService } from "./services/people";

var app = angular.module("sample", [])
    .service("app.services.UserService", UserService)
    .controller("PeopleController", PeopleCtrl);
export { app };
