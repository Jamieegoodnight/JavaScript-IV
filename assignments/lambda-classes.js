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

class Instructor extends Person {
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
        console.log()
    }
}