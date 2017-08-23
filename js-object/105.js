
var office = office || {};

office.Employee = function () {
    console.log("Employee");
}

office.Employee.prototype.say = function () {
    console.log("From Prototype");
}

office.Employee.prototype.another = 10;

office.Boss = function () {
    console.log("BOSS");
    this.bossName = "A";
}

office.Boss.prototype = new office.Employee();

var boss = new office.Boss();

boss.constructor = office.Boss;

console.log(boss.bossName);

console.log(boss.another);
boss.say();
console.log(boss.constructor === office.Employee);//false

