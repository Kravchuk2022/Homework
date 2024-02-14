
let car = {
    brand: "Nissan", 
    model: "Micro", 
    year: 2024,       

getInfo() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
                
                
            }
        }
    }
};

car.getInfo();
car.color = 'Black';
car.getInfo();

var services = {
    "Стрижка": 60,
    "Гоління": 80,
    "Миття_голови": 100
};
services.Розбити_скло = 200;

services.price = function() {
    var totalPrice = 0;
    for (var key in this) {
        if (typeof this[key] === 'number' && !isNaN(this[key])) {
            totalPrice += this[key];
        }
    }
    return totalPrice;
};

console.log(services.price());

var minPrice = Infinity;
for (var key in services) {
    if (typeof services[key] === 'number' && services[key] < minPrice) {
        minPrice = services[key];
    }
}
console.log("Мінімальна ціна:", minPrice);

var maxPrice = -Infinity;
for (var key in services) {
    if (typeof services[key] === 'number' && services[key] > maxPrice) {
        maxPrice = services[key];
    }
}
console.log("Максимальна ціна:", maxPrice);