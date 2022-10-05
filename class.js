"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
}
const use = new Users();
use.push(new User('Vasya'));
console.log(use);
