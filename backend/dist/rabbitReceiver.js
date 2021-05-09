"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitReceiver = void 0;
var amqp = require('amqplib/callback_api');
exports.rabbitReceiver = (event) => {
    console.log('receiver os also working');
    amqp.connect('amqps://otwqjumz:0J4-1C_CxvsepgSYK6AfdcTupSkf6OLU@jaguar.rmq.cloudamqp.com/otwqjumz', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var queue = 'serv1';
            channel.assertQueue(queue, {
                durable: true
            });
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
            channel.consume(queue, function (msg) {
                event.emit('message', msg.content.toString());
                console.log(" [x] Received %s", msg.content.toString());
            }, {
                noAck: true
            });
        });
    });
};
