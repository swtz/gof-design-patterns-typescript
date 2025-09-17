import { MyDatabaseClassic } from './db/my-database-classic';

const myDbClassic = MyDatabaseClassic.getInstance();

myDbClassic.add({ age: 35, name: 'Maria' });
myDbClassic.add({ age: 53, name: 'Luiz' });
myDbClassic.add({ age: 65, name: 'Léo' });
