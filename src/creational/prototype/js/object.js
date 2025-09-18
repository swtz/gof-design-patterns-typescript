const personPrototype = {
  firstName: 'Leonardo',
  lastName: 'Lüders',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// personPrototype faz parte da cadeia de prototypes de anotherPerson
const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.fullName());
