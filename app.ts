let a: number = 1;
const b: number = 3;
const res: number = a + b;

console.log(res);

function g(userObj: { firstname: string; age: number }) {
  return userObj.firstname, userObj.age;
}

const users = {
  firstname: 'jdkjkg',
  age: 5,
};
g(users);

const arr: readonly [string, number] = ['12', 12];

// enum - для предотвращения опечаток в коде

enum StatusCode {
  SUCCSESS = 1,
  IN_PROCESS = 2,
  FAILED = 3,
}

const result = {
  massage: 'платеж успешен',
  statusCode: StatusCode.SUCCSESS,
};

if (result.statusCode === StatusCode.SUCCSESS) {
}

// type Aliases

// type User = {
//   name: string;
//   age: number;
//   skills: string[];
// };

// type Role = {
//   name: string;
//   id: number;
// };

// type UserWithRole = User & Role;

// const user: UserWithRole = {
//   name: 'asd',
//   age: 5,
//   skills: ['1', '2'],
//   id: 1,
// };

//interface

interface User {
  name: string;
  age: number;
  skills: string[];
}

interface UserWithRole extends User {
  roleId?: number; // optional type
}

const user: UserWithRole = {
  name: 'asd',
  age: 5,
  skills: ['1', '2'],
  roleId: 1,
};
