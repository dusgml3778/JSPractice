class Vehicle {

  constructor(name, wheel) {

    this.name = name
    this.wheel = wheel

  }

}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}

const bicycle = new Bicycle('자전거', 3)

console.log(bicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const car = new Car('benz',4,'あり')

console.log(car)