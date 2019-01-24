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


const tina=new Instructors(
    {
      name: "Tina",
      age: "33",
      location: "Orlando, FL",
      gender: "Female",
      specialty: "Making animations",
      favLanguage: "CSS",
      catchPhrase: "Whoa-oa-oa!"

    }
);

const billy=new Instructors(
    {
      name: "Billy",
      age: "26",
      location: "Anchorage, AK",
      gender: "Male",
      specialty: "SEO",
      favLanguage: "HTML",
      catchPhrase: "That's cool!"

    }
);

const johnny=new Student(
    {
      name: "Johnny",
      age: "21",
      location: "Columbus, OH",
      gender: "Male",
      previousBackground: "Accounting",
      className: "WEB17",
      favSubjects: "Data Science"
      }

);

const sharraitu=new Student(
    {
      name: "Sharra Itu",
      age: "4,335",
      location: "Ancient Babylon",
      gender: "???",
      previousBackground: "Exploring occult secrets",
      className: "WEB17",
      favSubjects: "JavaScript"
      }

);

const barney=new ProjectManagers(
    {
      name: "Barney",
      age: "39",
      location: "NY, NY",
      gender: "Male",
      gradClassName: "WEB02",
      favInstructor: "Tina"
      }

);

const kat=new ProjectManagers(
    {
      name: "Kat",
      age: "19",
      location: "Los Angeles, CA",
      gender: "Female",
      gradClassName: "WEB10",
      favInstructor: "Billy"
      }

);

barney.speak();
kat.debugsCode(johnny, "CSS")
johnny.sprintChallenge("Redux");
billy.grade(sharraitu, "Authentication");
barney.standUp("Web17_barney");

