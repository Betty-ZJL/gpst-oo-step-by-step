const Person = require('./person');

class Teacher extends Person {

    constructor(name, age, clazzes, id) {
        super(name, age);
        this.clazzes = clazzes;
        let teacherProto = Object.getPrototypeOf(this);
        if (teacherProto.hasOwnProperty('nextID')) {
            this.id = '' + teacherProto.nextID++;
        } else {
            this.id = '' + 1;
            teacherProto['nextID'] = 2;
        }
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
}

module.exports = Teacher;