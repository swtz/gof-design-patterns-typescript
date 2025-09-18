export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addresses = this.addresses.map((item) => item.clone());
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Leonardo', 27);
person1.addAddress(address1);

const person2 = person1.clone();

// como foi feito 'deep copy' por criar o método
// Address.clone(), cada objeto tem seu próprio
// array de Address.
person1.addresses[0].street = 'Av São Paulo';

console.log({ person1, ...person1.addresses[0] });
console.log({ person2, ...person2.addresses[0] });
