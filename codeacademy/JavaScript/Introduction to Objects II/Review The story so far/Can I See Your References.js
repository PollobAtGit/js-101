var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a " + this.job);//'this' here is necessary
    }
};

james.sayJob();

james.job = "super programmer";
james.sayJob();
