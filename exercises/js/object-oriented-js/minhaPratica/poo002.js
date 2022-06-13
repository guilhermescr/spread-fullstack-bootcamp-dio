class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(name, color);
  }

  speak() {
    console.log(`${this.name} barked!`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, color);
  }

  speak() {
    console.log(`${this.name} says: Meow Meow!`);
  }
}

const animal = new Animal("Ratata", "White");
const dog = new Dog("Bob", "Caramel");
const cat = new Cat("Kenzie", "Black");

animal.speak();
dog.speak();
cat.speak();