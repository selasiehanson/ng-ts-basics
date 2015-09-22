/// <reference path="../../typings/angularjs/angular.d.ts" />
import { User } from "../services/people";
import  { UserService } from "../services/people";
interface IPeople {
    users: Array<User>;
    getFolks(): void;
}

class PeopleCtrl implements IPeople {
    
    users: Array<User>;
    static $inject = ["app.services.UserService"];

    constructor(private userService: UserService) {
        this.users=  [];
        this.getFolks();
    }

    getFolks() : void {
        this.users = this.userService.getUsers();
    }
   
}

export  { PeopleCtrl };