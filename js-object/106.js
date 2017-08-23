
class Chart {
    constructor(title) {
        this[title] = title;
    }

    moveTo(x, y) {

        // POI: How it works?
        this[x] = x;
        this[y] = y;

        console.log(this[x] + " => " + this[y]);
    }

    setBackgroundColor() {
        console.log("Setting Color");
    }
}

var chart = new Chart("v0.1");
chart.moveTo(10, 50);
chart.setBackgroundColor();

