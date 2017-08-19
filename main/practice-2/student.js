const Person = require('./person');

class Student extends Person {

    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
        let studentProto = Object.getPrototypeOf(this);
        if (studentProto.hasOwnProperty('nextID')) {
            this.id = '' + clazz + studentProto.nextID++;
        } else {
            this.id = '' + clazz + 1;
            studentProto['nextID'] = 2;
        }
    }

    introduce() {
        if (this == this.clazz.leader)
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.number}.`
        else
            return super.introduce() + ` I am a Student. I am at Class ${this.clazz.number}.`;
    }

}

module.exports = Student;