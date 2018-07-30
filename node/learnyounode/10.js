const net = require('net');

const server = net.createServer(function (socket) {

    const date_instance = new Date();
    const current_date_month = date_instance.getMonth() + 1;

    const date_str_to_send = `${date_instance.getFullYear()}-${current_date_month < 10 ? `0${current_date_month}` : current_date_month.toString()}-${date_instance.getDate()} ${date_instance.getHours()}:${date_instance.getMinutes()}\n`;
    // socket.write(date_str_to_send);

    socket.end(date_str_to_send);
});

server.listen(Number(process.argv[2]));
