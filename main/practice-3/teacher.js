const Person = require('./person');

class Teacher extends Person {

    constructor(name, age, clazzes, id) {
        super(name, age);
        this.clazzes = clazzes;
        this.id = '00' + parseInt(Math.random() * 1000 + 1);
        this.joinClazz();
    }

    joinClazz() {
        for (let clazz of this.clazzes)
            clazz.teachers.push(this);
    }

    introduce() {
        if (this.clazzes.length == 0) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }
        else {
            let clazzes = this.clazzes.map(function (clazz) {
                return clazz.number
            });
            return super.introduce() + ` I am a Teacher. I teach Class ${clazzes}.`
        }
    }

    isTeaching(student) {
        for (let clazz of this.clazzes) {
            if (clazz.hasStudent(student))
                return true;
        }
        return false
    }

    notifyStudentAppended(message) {
        console.log(`I am ${this.name}. I know ${message}.`);
    }

    notifyLeaderAssigned(message) {
        console.log(`I am ${this.name}. I know ${message}.`);
    }

}

module.exports = Teacher;