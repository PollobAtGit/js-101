function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function () {
        console.log("Hello!");
    }
}

var user = new Person("Codecademy Student",false);
user.speak();