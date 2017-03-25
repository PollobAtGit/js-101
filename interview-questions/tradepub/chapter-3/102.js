
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;

        //Poi: In this scope, 'this' & 'self' BOTH ARE DEFINED

        //outer func: this.foo = bar
        console.log("outer func: this.foo = " + this.foo);

        //outer func: self.foo = bar
        console.log("outer func: self.foo = " + self.foo);

        //Poi: Following is a local scope. So 'this' is NOT defined in that scope but self IS DEFINED.
        //Because 'self' is defined in outer scope. So the value stored in 'self' IS DEFINED

        (function() {
            //inner func: this.foo = undefined
            console.log("inner func: this.foo = " + this.foo);

            //inner func: self.foo = bar
            console.log("inner func: self.foo = " + self.foo);
        }());
    }
};

myObject.func();
