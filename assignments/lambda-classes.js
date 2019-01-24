// CODE here for your Lambda Classes
class Person {
    constructor(baseAttrs) {
        this.name = baseAttrs.name;
        this.age = baseAttrs.age;
        this.location = baseAttrs.location;
        this.gender = baseAttrs.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(insAttrs) {
        super(insAttrs);
        this.specialty = insAttrs.specialty;
        this.favLanguage = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        $this.favSubjects.forEach((subject) => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.student.name} has submitted a PR for {subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.student.name} has begun spring challenge on {subject}`);
    }

}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to {channel}`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs {student.name}'s code on {subject}`);
    }
}