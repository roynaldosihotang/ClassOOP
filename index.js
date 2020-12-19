var personLogic = require('./domain/person/person.logic')
var person1 = new personLogic('Roy','2323133005940333','1994-05-30');
person1.print();

var personAge = require('./domain/personAge/personAge.logic')
var age1 = new personAge ('Roy','2323133005940333','1994-05-30');
age1.print();

var validateNik = require('./domain/validateNik/validateNik.logic')
var validate1 = new validateNik('Roy','2323133005940333','1994-05-30');

validate1.print();
console.log('\n===================\n')

var person2 = new personLogic('Dimas','2323133005940333','1980-05-30');
person2.print();
var age2 = new personAge ('Dimas','2323133005940333','1980-05-30');
age2.print();
var validate2 = new validateNik('Dimas','2323133005940333','1980-05-30');
// console.log(employeeLogic)
validate2.print();




