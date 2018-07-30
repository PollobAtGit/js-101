describe("Input", function () {

    const my_module_one = require("./../../1");
    const my_module_two = require("./../../2");
    const player_module = require("./../../player_module");
    const factory = require("./../../new_instance_provide");

    let instance;

    beforeEach(function () {
        spyOn(player_module, "add_ten");
        spyOn(player_module, "minus_ten");

        instance = new factory();
        console.log("Before Each has been invoked");
    });

    afterEach(function () {
        instance == null;
        console.log("After Each has been invoked");
        console.log(`instance === null => ${instance === null}`);
    });

    beforeAll(function () {
        console.log(`Before All`);
    });

    afterAll(function () {
        console.log(`After All`);
    });

    it("should be uppercased properly", function () {

        const sample_str = "some string";
        expect(my_module_one(sample_str)).toEqual(sample_str.toUpperCase());

        expect(instance).not.toBeNull();
    });

    it("function [repeat] should be invoked 20 times", function () {

        player_module.recursive_invocation_n_times(10);
        expect(player_module.add_ten).toHaveBeenCalledWith(1);
        expect(player_module.add_ten).toHaveBeenCalledWith(9);
        expect(player_module.add_ten).toHaveBeenCalledTimes(2);
        expect(player_module.minus_ten).not.toHaveBeenCalled();

        expect(instance).not.toBeNull();
    });
});
