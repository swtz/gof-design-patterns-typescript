import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class EnterpriseCustomerVehicleFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = new EnterpriseCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
