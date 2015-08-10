function compute_active_users(n, b) {
    var bounceCnt = (b * n) / 100.00;
    console.log(Math.floor((n - bounceCnt)));
}

compute_active_users(1000, 25);
compute_active_users(835, 17);
