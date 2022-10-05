"use strict";
let a = 1;
const b = 3;
const res = a + b;
console.log(res);
function g(userObj) {
    return userObj.firstname, userObj.age;
}
const users = {
    firstname: 'jdkjkg',
    age: 5,
};
g(users);
const arr = ['12', 12];
// enum - для предотвращения опечаток в коде
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCSESS"] = 1] = "SUCCSESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const result = {
    massage: 'платеж успешен',
    statusCode: StatusCode.SUCCSESS,
};
if (result.statusCode === StatusCode.SUCCSESS) {
}
const user = {
    name: 'asd',
    age: 5,
    skills: ['1', '2'],
    roleId: 1,
};
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            const _ = action;
            throw new Error('Нет такого action');
    }
}
const a2 = {};
assertUser(a2);
a2.name = 'Vasya';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not User2');
}
