const exposed_instance = {
    "add_ten": function (n) { return n + 10; },
    "minus_ten": function (n) { return n - 10; },
    "recursive_invocation_n_times": function (n) {
        if (n < 0) return;
        this.add_ten(n - 1);
        this.add_ten(n - 9);
    }
}

module.exports = exposed_instance;