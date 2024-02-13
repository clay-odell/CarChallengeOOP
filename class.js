class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    const { make, model, year } = this;
    return `The vehicle is a ${make} ${model} from ${year}.`;
  }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 4;
    }
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
console.log(myFirstCar.numWheels);  // 4