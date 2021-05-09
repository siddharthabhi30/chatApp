import EventEmitter from "node:events";



var amqp = require('amqplib/callback_api');

export const rabbitSender=async (myEmitter:EventEmitter)=>{
    console.log("this is again runnign  ampz connectpr")
    amqp.connect('amqps://otwqjumz:0J4-1C_CxvsepgSYK6AfdcTupSkf6OLU@jaguar.rmq.cloudamqp.com/otwqjumz', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
   
    var msg = 'Hello world 4';
    channel=channel;

    channel.assertExchange('chat-exchange', 'fanout', {durable: true})

    myEmitter.on('sendMessage',(data)=>{
        
        channel.publish('chat-exchange', 'fanout', Buffer.from(data));
        console.log("message is send to rabbit")
    })


    
   // console.log(" [x] Sent %s", msg);
   
  });
});
}

