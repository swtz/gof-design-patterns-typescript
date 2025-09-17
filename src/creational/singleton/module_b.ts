import { myDbModule } from './db/my-database-module';
import { myDbModule as myDbModuleA } from './module_a';

myDbModule.add({ age: 35, name: 'Roberto' });
myDbModule.add({ age: 53, name: 'Joana' });
myDbModule.add({ age: 65, name: 'Eduardo' });
myDbModule.show();

console.log(myDbModule === myDbModuleA); // true
