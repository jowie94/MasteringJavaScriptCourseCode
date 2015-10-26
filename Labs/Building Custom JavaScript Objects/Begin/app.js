function Auto(price, year, make, model) {
	this.price = price;
}
Auto.prototype.constructor = Auto;

Auto.prototype.getTotal = function(taxRate) {
	return this.price + (this.price * taxRate);
}

Auto.prototype.getDetails = function() {
	return this.year + ' ' + this.make + ' ' + this.model;
}

var Car = function(data) {
	this.make = data.make;
	this.model = data.model;
	this.year = data.year;
	this.price = data.price;
	this.isElectric = data.isElectric;
	this.isHatchback = data.isHatchback;
}

Car.prototype = Object.create(Auto.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function() {
	var details = Auto.prototype.getDetails.call(this);
	return details + ' Electric: ' + this.isElectric +
                     '  Hatchback: ' + this.isHatchback;
}

var Truck = function(data) {
	this.make = data.make;
	this.model = data.model;
	this.year = data.year;
	this.price = data.price;
	this.is4by4 = data.is4by4;
}

Truck.prototype = Object.create(Auto.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.getDetails = function() {
	var details = Auto.prototype.getDetails.call(this);
	return details + '4x4: ' + this.is4by4;
}

var car = new Car({price: 30000, make: 'Chevy', model: 'Malibu',
			year: 2014, isElectric: false, isHatchback: false});
var truck = new Truck({price: 40000, make: 'Ford', model: 'F150',
			year: 2014, is4by4: true});

var output = document.getElementById('output');
output.innerHTML = car.getDetails() + "<br />" +
					car.getTotal(0.08) + "<br />" +
					truck.getDetails() + "<br />" +
					truck.getTotal(0.08);