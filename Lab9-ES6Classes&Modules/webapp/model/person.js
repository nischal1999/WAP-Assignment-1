"use strict";

export class Person {
  constructor(name, dateOfBirth) {
    this.fullName = name;
    this.birthDate = dateOfBirth;
  }

  get name() {
    return this.fullName;
  }

  set name(name) {
    this.fullName = name;
  }

  get dateOfBirth() {
    return this.birthDate;
  }

  set dateOfBirth(dateOfBirth) {
    this.birthDate = dateOfBirth;
  }
  get dateOfBirthInFormat(){
    const year = this.birthDate.getFullYear();
    const month = (this.birthDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = this.birthDate.getDate().toString().padStart(2, '0');
    const dateOfBirthInFormat=year+"-"+month+"-"+day;
    return dateOfBirthInFormat;
  }
  toString() { 
    return `{ Name: ${this.name}, DateOfBirth: ${this.dateOfBirthInFormat} }`;
  }
}