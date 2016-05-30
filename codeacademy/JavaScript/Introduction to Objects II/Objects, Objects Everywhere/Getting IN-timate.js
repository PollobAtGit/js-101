var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// Following prints property names
for( var property in nyc ) {
    console.log(property);
}

// Following prints value
for( var property in nyc ) {
     console.log(nyc[property]);
}