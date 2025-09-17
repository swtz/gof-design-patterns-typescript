import { MyDatabaseClassic } from './db/my-database-classic';
import { myDbClassic as myDbClassicA } from './module_a';

const myDbClassic = MyDatabaseClassic.instance;

myDbClassic.add({ age: 35, name: 'Roberto' });
myDbClassic.add({ age: 53, name: 'Joana' });
myDbClassic.add({ age: 65, name: 'Eduardo' });
myDbClassic.show();

console.log(myDbClassic === myDbClassicA); // true
