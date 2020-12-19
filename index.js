const name ='Roy'
const nik = '31287433005940321'
const bod = '1994-05-30'



var personLogic = require('./domain/person/person.logic')
var person1 = new personLogic(name,nik,bod);
person1.print();
// console.log(employeeLogic)
var personAge = require('./domain/personAge/personAge.logic')
var age1 = new personAge (name,nik,bod);
age1.print();
