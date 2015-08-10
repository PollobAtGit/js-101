function converter (miles_per_gallon) {
    var KILO_METERS_PER_MILE = 1.609344;
    var LITRES_PER_GALLON = 4.54609188;

    return round_to_two_decimals((KILO_METERS_PER_MILE * miles_per_gallon) / LITRES_PER_GALLON);
}

function round_to_two_decimals(number) {
    return (Math.round(number * 100) / 100);
}

console.log(converter(10))
console.log(converter(20))
console.log(converter(30))