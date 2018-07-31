let EventEmitter = require('events').EventEmitter;

let util = require('util');

class MyEventEmitter{
    constructor(data){
        this.data = data;
    }
}

util.inherits(MyEventEmitter,EventEmitter);
let myEventEmitter = new MyEventEmitter("Hello World");

myEventEmitter.on('eventOne',function(data){
    console.log("event caught");
    this.data == data;
    console.log(this.data);
})

setTimeout(function(){
    myEventEmitter.emit('eventOne',"world");
},500)