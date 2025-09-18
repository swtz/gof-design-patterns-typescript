export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Leonardo', 27);
person1.addAddress(address1);

// person2 possui prototype de person1
const person2 = person1.clone();

// O endereço de person2 também sofre modificações,
// por causa do 'shallow copy'.
// Quando há objetos que precisam ser únicos em cada
// instância, é precisar fazer 'deep copy'.
person1.addresses[0].street = 'Av São Paulo';

console.log(person2.addresses);
