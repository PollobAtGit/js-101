
function print(msg) {
    console.log(msg);
}

var jane = {
    name: 'JANE',
    describe: function() {
        return function() {

            //POI: This is a function inside a method. So 'this' of 'describe' is different than 'this' mentioned here
            //POI: This is also called shadowing. It is said that functions inside method shadow 'this'
            //POI: In strict mode, following line will throw exception

            return this.name;
        };
    }
}

print(jane.describe()());

//POI: 1st getting the inner function by invoking 'describe' than invoking bind on that will allow us
// to set the context

var callBack = jane.describe().bind(jane);

//POI: Invoking this function in distant future
print(callBack());

var obj = {
    name: 'JANE',
    friends: ['Tarzan', 'Cheeta'],
    loop: function() {

        //POI: this here refers to 'obj' object
        this.friends.forEach(function(friend) {

            //POI: 'this' here is undefined. Function inside method shadows 'this'
            //POI: In strict mode, following line will throw error

            print(this.name + ' knows ' + friend);

        //POI: Passing context to the function that will be invoked inside 'forEach'
        // }, this);

        //POI: Traditional approach to set context using 'bind'
        // }.bind(this));

        }.bind(this));
    },
    anotherLoop: function() {

        //POI: Another approach to resolve problem of shadowing this inside function of a method
        var self = this;
        this.friends.forEach(function(friend) {
            print(self.name + ' knows ' + friend);
        });
    }
}

obj.loop();
obj.anotherLoop();