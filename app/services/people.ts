/// <reference path="../../typings/angularjs/angular.d.ts" />
class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

interface IUserService {
    getUsers(): Array<User>;
}

class UserService implements IUserService {

    constructor() {

    }

    getUsers(): Array<User> {
        var users = new Array<User>();
        users.push(new User("kofi poku"));
        users.push(new User("Kwame Kodua"));
        users.push(new User("kofi poku"));
        users.push(new User("Silas the don"));
        return users;
    }
}

export { User , UserService };
