interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const myDbClassic = MyDatabaseClassic.getInstance();

myDbClassic.add({ age: 35, name: 'Maria' });
myDbClassic.add({ age: 53, name: 'Luiz' });
myDbClassic.add({ age: 65, name: 'Léo' });
myDbClassic.remove(1);
myDbClassic.show();
