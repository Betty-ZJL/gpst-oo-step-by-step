const Person = require('./person');

class Student extends Person {

    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
        this.id = '' + clazz.number + parseInt(Math.random() * 1000 + 1);
    }

    introduce() {
        if (this == this.clazz.leader)
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.number}.`
        else
            return super.introduce() + ` I am a Student. I am at Class ${this.clazz.number}.`;
    }

}

module.exports = Student;