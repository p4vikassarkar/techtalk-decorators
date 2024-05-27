import { logger, logged, log } from "./log.decorator";

//4// @logged
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    @log
    @logger
    getAge(){
        return `${this.name} is ${this.age} years old.`;
    }
}

let vik = new Person("Vikas", 30);
// console.log(vik);
const vikAge = vik.getAge();
console.log(vikAge);