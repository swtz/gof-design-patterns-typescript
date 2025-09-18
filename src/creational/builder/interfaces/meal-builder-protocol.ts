export interface MealBuilderProtocol {
  makeMeal(): this;
  // VeganDishBuilder não usa os métodos abaixo, mas
  // implementa essa interface. Logo, não é necessário
  // que esses métodos estejam no contrato.
  // makeBeverage(): this;
  // makeDessert(): this;
}
