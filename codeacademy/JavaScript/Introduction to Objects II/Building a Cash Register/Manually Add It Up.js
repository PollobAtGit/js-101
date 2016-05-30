var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

cashRegister.add( 0.98 );// Egg
cashRegister.add( 1.23 );// Milk
cashRegister.add( 4.99 );// Magazine
cashRegister.add( 0.45 );// Chocolate

console.log('Your bill is '+cashRegister.total);
