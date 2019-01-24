// CODE here for your Lambda Classes

class Person {
    constructor(obj){
        this.name=obj.name;
        this.age=obj.age;
        this.location=obj.location;
        this.gender=obj.gender;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    };
}

class Instructors extends Person {
    constructor(insobj){
        super(insobj);
        this.specialty=insobj.specialty;
        this.favLanguage=insobj.favLanguage;
        this.catchPhrase=insobj.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    };
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}!`)
    };
}


class Student extends Person {
    constructor(stuobj){
        super(stuobj);
        this.previousBackground=stuobj.previousBackground;
        this.className=stuobj.className;
        this.favSubjects=stuobj.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`)
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a pull request for ${subject}.`)
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`)
    };
}


class ProjectManagers extends Instructors{
    constructor(proobj){
        super(proobj);
        this.gradClassName=proobj.gradClassName;
        this.favInstructor=proobj.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    };
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    };
}