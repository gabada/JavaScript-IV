// CODE here for your Lambda Classes
class Person {
    constructor(baseAttrs) {
        this.name = baseAttrs.name;
        this.age = baseAttrs.age;
        this.location = baseAttrs.location;
        this.gender = baseAttrs.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    assess(student) {
        while (student.grade < 70) {
        let min = Math.ceil(25);
        let max = Math.floor(0);
        let projectGrade = Math.floor(Math.random() * (max - min + 1 )) + min;
        student.grade += projectGrade;
        }
        return student.graduate();
        
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects() {
        let returnStr = "";
        this.favSubjects.forEach((subject) => {
            returnStr += subject  + '\n';
        });
        return returnStr;

    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }

    graduate(grader, student) {
        if (this.grade > 70) {
            return `CONGRATS!! ${this.name} you graduate with a score of ${this.grade}. Go get a job!`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel} standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
    previousBackground: `Serial Killer`,
    grade: 20
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

console.log(fred.demo('JavaScript-IV'));
console.log(fred.grade(jason,'HTML'));
console.log(fred.assess(jason));

console.log(jason.listsSubjects());
console.log(jason.PRAssignment('CSS'));
console.log(jason.sprintChallenge('JavaScript'));


console.log(steve.standup('web17_pm-steve'));
console.log(steve.debugsCode(jason, 'LESS'));
console.log(steve.assess(jason));