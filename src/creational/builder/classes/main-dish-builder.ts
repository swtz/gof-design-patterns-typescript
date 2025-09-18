import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    throw new Error('Method not implemented.');
  }
  makeBeverage(): this {
    throw new Error('Method not implemented.');
  }
  makeDessert(): this {
    throw new Error('Method not implemented.');
  }
}
