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
        this.favSubjects.forEach((subject) => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`);
    }

}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Elm Street',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jason = new Student({
    name: 'Jason',
    location: 'Bedrock',
    age: 39,
    gender: 'male',
    favSubjects: ['HTML', 'CSS', 'LESS'],
    className: 'WEB17',
    previousBackground: `Serial Killer`
});

const steve = new ProjectManager({
    name: 'Steve',
    location: 'Florida',
    age: 42,
    gender: 'male',
    favLanguage: 'CSS',
    gradClassName: 'WEB15',
    favInstructor: `Josh Knell`
});

fred.demo('JavaScript-IV');
fred.grade(jason,'HTML');

jason.listsSubjects();
jason.PRAssignment('CSS');
jason.sprintChallenge('JavaScript');

steve.standup('web17_pm-steve');
steve.debugsCode(jason, 'LESS');