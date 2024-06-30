const animal = new Animal("Unknown");
console.log(animal.species); 
animal.makeSound(); 
// const animal = new Animal("Unknown");
// console.log(animal.species); 
// animal.makeSound(); 

const cat = new Cat("Cat");
console.log(cat.species); 
cat.makeSound(); 
cat.purr();
// const cat = new Cat("Cat");
// console.log(cat.species); 
// cat.makeSound(); 
// cat.purr();

const dog = new Dog("Dog");
console.log(dog.species); 
dog.makeSound(); 
dog.bark(); 
// const dog = new Dog("Dog");
// console.log(dog.species); 
// dog.makeSound(); 
// dog.bark(); 

// Do not change the code below this line
window.Animal = Animal;