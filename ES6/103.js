
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

materials
    .map((el, i) => `Index ${i} : ${el}`)
    .forEach(el => console.log(el));
