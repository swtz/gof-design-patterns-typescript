import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDbClassic = MyDatabaseClassic.getInstance();

myDbClassic.add({ age: 35, name: 'Roberto' });
myDbClassic.add({ age: 53, name: 'Joana' });
myDbClassic.add({ age: 65, name: 'Eduardo' });
myDbClassic.show();
