
console.log(charto === undefined);

// POI: If undefined then set it to empty object
var charto = charto || {};

console.log(charto instanceof Object);// true
console.log(null instanceof Object);// false

// POI: Chart is a class inside charto namespace
charto.Chart = function (r, g, b) {
    console.log("Setting chart background color to: r:" + r + ", g:" + g + ", b:", + b);
}
var chartInstance = new charto.Chart(1, 2, 3);

// POI: Setting method as prototype. So that it can be used as base class
charto.Chart.prototype.setBackgroundColor = function (k) {
    console.log("KOP : " + k);
}

charto.Chart.prototype.moveTo = function (x, y) {
    console.log("Moving chart to position x => " + x + ",y => " + y);
}

// POI: moveTo is set as Chart's method
chartInstance.moveTo("10", "30");
chartInstance.setBackgroundColor("OP");

charto.BarChart = function (title, width, height) {
    console.log("Creating BarChart");
    this.title = title;
    this.width = width;
    this.height = height;
}

var barChartInstance = new charto.BarChart();

console.log(charto.BarChart.constructor === charto.BarChart);

charto.BarChart.prototype = new charto.Chart();
charto.BarChart.constructor = charto.BarChart;

charto.PieChart = function (title, radius) {
    this.title = title;
    this.radius = radius;
}

charto.PieChart.prototype = new charto.Chart();
charto.PieChart.constructor = charto.PieChart;

// console.log(charto.BarChart.constructor === charto.BarChart);
// console.log(charto.BarChart.constructor === charto.Chart);
// barChartInstance.setBackgroundColor(255, 255, 255);
// barChartInstance.moveTo();

barChartInstance.setBackgroundColor(255, 255, 255);