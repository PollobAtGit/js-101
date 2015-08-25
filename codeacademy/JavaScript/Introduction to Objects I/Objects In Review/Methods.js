function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // Method to calculate perimeter
    this.perimeter = function() {
    	return (2 * Math.PI * this.radius);
    }
};

var crcleObject = new Circle(3.23);
console.log(crcleObject.perimeter());