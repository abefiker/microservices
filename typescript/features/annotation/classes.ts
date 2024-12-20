class Vehicle {
  constructor(public color: string) {}
  protected honk() {
    console.log('beep! beep!');
  }
}
const vehicle = new Vehicle('orange');
class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }
  private drive(): void {
    console.log('vroom vroom');
  }
  drivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car('orange', 4);
car.drivingProcess();
console.log(car.color)