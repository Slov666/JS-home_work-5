class Car {
    static getSpecs(car) {
        const {
            _speed,
            _price,
            _maxSpeed,
            _isOn,
            _distance
        } = car;

        console.log(`Speed: ${_speed},
Price: ${_price},
MaxSpeed: ${_maxSpeed},
Is on: ${_isOn},
Distance: ${_distance}
`);
    }
    constructor({
        maxSpeed,
        price
    }) {
        this._speed = 0;
        this._maxSpeed = maxSpeed;
        this._price = price;
        this._isOn = false
        this._distance = 0;
    };
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    turnOn() {
        return this._isOn = true;
    }
    turnOff() {
        this._speed = 0
        return this._isOn = false;
    }
    accelerate(value) {
        if (this._speed + value < this._maxSpeed) {
        this._speed += value;
        }
    }
    decelerate(value) {
        if(this._speed - value > 0) {
            this._speed -= value;
            
        }
    }
    drive(hours) {
        if(this._isOn){
           this._distance = this._speed * hours; 
        }
    }
}

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000