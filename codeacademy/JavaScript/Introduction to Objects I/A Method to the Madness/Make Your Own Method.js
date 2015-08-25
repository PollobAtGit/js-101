var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

rectangle.setHeight = function (newHeight) {
    this.height = newHeight;
};

rectangle.setWidth = function (newWidth) {
    this.width = newWidth;

    /*Following doesn't work as 'this' is not specified here. Why doesn't work ? Assumption was
    as the function is defined in object scope in that case it should 'by default'
    understand/point that object's properties.*/
    //width = newWidth;
}

rectangle.setHeight(6);
rectangle.setWidth(8);

console.log(rectangle.height);
console.log(rectangle.width);
