//Using Object Literal

const student={
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
      let sum=  this.grades.reduce((a,c)=>a+c,0);
      let length=this.grades.length;
      return sum/length;
    }  
}

const student1 = {
    firstName: "John",
    lastName: "Cena",
    grades: [75,85,90,92,87],
    __proto__:Object.create(student)
  };

  const student2 = {
    firstName: "Nischal",
    lastName: "Aryal",
    grades: [80,85,82,83,90],
    __proto__:Object.create(student) 
  };  
  
  const student3 = {
    firstName: "Harry",
    lastName: "Potter",
    grades: [70,80,75,77,83],
    __proto__:Object.create(student) 
  
  };

  let studentArr=[student1,student2,student3];

  let overallAvg=studentArr.reduce((a,c)=>a+c.computeAverageGrade(),0)/studentArr.length;

  console.log(overallAvg);

//Using Constructor Function

  function Student(firstName,lastName,grades){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=grades;
    this.inputNewGrade=function(newGrade){
        this.grades.push(newGrade);
    }
    this.computeAverageGrade=function(){
       return this.grades.reduce((a,c)=>a+c,0)/this.grades.length;
    }
    this.sort=function(){
        this.grades.sort;
    }
  }

const student4 = new Student("John", "Cena", [75, 85, 90, 92, 87]);
const student5 = new Student("Nischal", "Aryal", [80, 85, 82, 83, 90]);
const student6 = new Student("Harry", "Potter", [70, 80, 75, 77, 83]);

let studentArray = [student1, student2, student3];

let overallAverage = studentArr.reduce((a, c) => a + c.computeAverageGrade(), 0) / studentArr.length;

console.log(overallAvg);


//Q3

arr=[3,2,1];

Array.prototype.sortAsc=function(){
    return this.sort((a,b)=>a-b);
};

console.log(arr.sortAsc());

