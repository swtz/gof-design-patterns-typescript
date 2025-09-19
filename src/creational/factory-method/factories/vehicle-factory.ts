import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;

  // O método abaixo é só para reforçar que é possível
  // implementar alguma lógica na abstração para
  // criar o objeto
  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}
