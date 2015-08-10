function Rectangle(height, width) {
    this.height = height;
    this.width = width;

    this.calcArea = function() {
      return this.height * this.width;
    };

    this.calcPerimeter = function() {
        return ((2 * this.height) + (2 * this.width));
    }
}

var rex = new Rectangle(7,3);

//'calcPerimeter' is a property that has been set from constructor
var perimeter = rex.calcPerimeter();
var area = rex.calcArea();

console.log(perimeter);