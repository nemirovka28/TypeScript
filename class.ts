class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter(u => u.name === name);
  }
}

const use = new Users();
use.push(new User('Vasya'));
console.log(use);
