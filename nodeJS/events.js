let EventEmitter = require('events').EventEmitter;
let eventEmitter = new EventEmitter();

eventEmitter.on('eventOne',(data)=>{
    console.log(data);
})

setTimeout(function(){
    eventEmitter.emit('eventOne',"Hello World");
},500);