function repeat_iteration(operation, num) {
    for (let i = 0; i < num; i++) {
        operation();
    }
}

function repeat(operation, num) {
    if (num < 0) return;
    const backward_index = num - 1;
    repeat(operation, backward_index)
}

module.exports = repeat;
