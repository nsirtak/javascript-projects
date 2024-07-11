//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

fox.name = "Lucy"
console.log(fox);
console.log(fox.age, fox.color, fox.name);

fox.mass = 15
console.log(fox);
console.log(fox.age, fox.color, fox.name, fox.mass);

//Try modifying or adding properties below.