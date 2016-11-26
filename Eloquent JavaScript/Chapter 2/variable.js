/**
 * Created by pollo_000 on 11/27/2016.
 */

var oneVariable = 10;
print(oneVariable);

oneVariable = 'Halua !';
print(oneVariable);

oneVariable = 26.23;//JS has one numeric type so it's same as 10
print(oneVariable);

oneVariable = {};
print(oneVariable);

oneVariable = true;
print(oneVariable);

oneVariable = NaN;
print(oneVariable);

//POI #1: Any thing can be set into a JS variable at any time.

function print(message) {
    console.log(message);
}