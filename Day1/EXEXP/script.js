// Exercise 1 : Location
// THE OUTPUT WILL BE 
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info

// function displayStudentInfo(objUser){
//     //destructuring
//     console.log(`YOUR FULL NAME IS ${objUser.first} ${objUser.last}`);
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3: User & Id

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// console.log(Object.entries(users));

// const entries=Object.entries(users)
// const sum=[]
// for(const[name,id] of entries){
// sum.push([name,id*2])
// }
// console.log(sum);


// Exercise 4 : Person Class

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

// THE OUTPUT WILL BE UNDEFINED BECAUSE ON THE CONSOLE.LOG THERE IS TYPEOF OPERATOR

// Exercise 5 : Dog Class


//--2--
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

//   let dogs=new Labrador("kuch","small")
//   console.log(dogs);

// Exercise 6 : Challenges

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mamal extends Animal {
    sound(noise) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${noise}`;
    }
  }
  
  const farmerCow = new Mamal("Lily", "cow", "brown and white");
  const cowSound = farmerCow.sound("mooo");
  console.log(cowSound);
