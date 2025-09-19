import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = new IndividualCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
