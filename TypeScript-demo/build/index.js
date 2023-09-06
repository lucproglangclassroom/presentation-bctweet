"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// An application to calculate a (not super unique) student ID!
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const newName = prompt("What is your name? ");
const newAge = parseInt(prompt("How old are you? "));
const newMajor = prompt("What is your major? ");
let you = {
    name: newName,
    age: newAge,
    major: newMajor,
    sid: newName.charCodeAt(0) * newName.length + newMajor.charCodeAt(0) * newName.length * newAge,
    aboutMe: function () {
        return `\n\nHello there, ${this.name}!\nYou are ${this.age} years old.\nYour major is ${this.major}.\nYour new student ID is: ${this.sid}`;
    }
};
function introduction(student) {
    return student.aboutMe();
}
console.log(introduction(you));
