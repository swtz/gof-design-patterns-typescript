import { myDbModule } from './db/my-database-module';

myDbModule.add({ age: 35, name: 'Maria' });
myDbModule.add({ age: 53, name: 'Luiz' });
myDbModule.add({ age: 65, name: 'Léo' });

export { myDbModule };
