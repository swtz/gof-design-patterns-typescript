import { MyDbFunction } from './db/my-database-function';
import { MyDbFunction as MyDbFunctionA } from './module_a';

MyDbFunction.add({ age: 35, name: 'Roberto' });
MyDbFunction.add({ age: 53, name: 'Joana' });
MyDbFunction.add({ age: 65, name: 'Eduardo' });
MyDbFunction.show();

console.log(MyDbFunction === MyDbFunctionA); // true
