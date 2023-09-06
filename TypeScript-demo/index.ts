// An application to calculate a (not super unique) student ID!
import promptSync from 'prompt-sync';
interface Student {
    sid: number,
    name: string,
    age: number,
    major: string,
    aboutMe(): string
}
const prompt = promptSync();

const newName = prompt("What is your name? ")
const newAge = parseInt(prompt("How old are you? "))
const newMajor = prompt("What is your major? ")

let you = {
    name:newName,
    age:newAge,
    major:newMajor,
    sid:newName.charCodeAt(0) * newName.length + newMajor.charCodeAt(0) * newName.length * newAge,
    aboutMe: function() {
        return `\n\nHello there, ${this.name}!\nYou are ${this.age} years old.\nYour major is ${this.major}.\nYour new student ID is: ${this.sid}`
    }
}
function introduction(student: Student) {
    return student.aboutMe();
}

console.log(introduction(you))