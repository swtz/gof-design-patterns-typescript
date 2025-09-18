function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Leonardo',
  lastName: 'Lüders',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const person1 = new Person('Laura', 'Cabral', 27);
console.log(person1);

// #################### HERANÇA NO JAVASCRIPT ####################
// Será usado a função construtora Person
function SubPerson(firstName, lastName, age, height, weight) {
  Person.call(this, firstName, lastName, age);
  this.height = height;
  this.weight = weight;
}

SubPerson.prototype = Object.create(personPrototype);
SubPerson.prototype.constructor = SubPerson;

const person2 = new Person('Maria', 'Cabral', 54, 1.65, 70);
console.log(person2);

// Todo esse processo é feito pelo TypeScript quando se usam as classes
