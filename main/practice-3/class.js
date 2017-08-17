class Class {

    constructor(number) {
        this.number = number;
        this.students = [];
        this.teachers = [];
    }

    assignLeader(student) {
        if (this.hasStudent(student)) {
            this.leader = student;
            for (let teacher of this.teachers)
                teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`);
            return `Assign team leader successfully.`;
        }
        else {
            return `It is not one of us.`;
        }
    }

    appendMember(student) {
        this.students.push(student);
        for (let teacher of this.teachers)
            teacher.notifyStudentAppended(`${student.name} has joined Class ${this.number}`);
    }

    hasStudent(student) {
        if (this.students.includes(student))
            return true;
        else
            return false;
    }

}


module.exports = Class;