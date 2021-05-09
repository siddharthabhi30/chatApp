"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitSender = void 0;
var amqp = require('amqplib/callback_api');
exports.rabbitSender = (myEmitter) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("this is again runnign  ampz connectpr");
    amqp.connect('amqps://otwqjumz:0J4-1C_CxvsepgSYK6AfdcTupSkf6OLU@jaguar.rmq.cloudamqp.com/otwqjumz', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var msg = 'Hello world 4';
            channel = channel;
            channel.assertExchange('chat-exchange', 'fanout', { durable: true });
            myEmitter.on('sendMessage', (data) => {
                channel.publish('chat-exchange', 'fanout', Buffer.from(data));
                console.log("message is send to rabbit");
            });
            // console.log(" [x] Sent %s", msg);
        });
    });
});
