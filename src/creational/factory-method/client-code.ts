import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();

const fusca = carFactory.getVehicle('fusca');
fusca.pickUp('Leonard');
fusca.stop();

const celta = carFactory.getVehicle('celta');
celta.pickUp('Mary');
celta.stop();
