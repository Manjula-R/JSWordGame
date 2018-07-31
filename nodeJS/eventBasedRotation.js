let EventEmitter = require('events').EventEmitter;
let util = require('util');

class StringRotator{
    constructor(string){
        this.str = string;
    }
    rotateRight(){
        this.str = this.str[this.str.length-1] + this.str.slice(0,this.str.length-1);
    }
    rotateLeft(){
        this.str = this.str.slice(1) + this.str[0];
    }
}

util.inherits(StringRotator,EventEmitter);

let stringRotator = new StringRotator("Hello World");
stringRotator.on('rotateRight',function(){
    this.rotateRight();
    console.log(this.str);
})

stringRotator.on('rotateLeft',function(){
    this.rotateLeft();
    console.log(this.str);
})

process.stdin.setEncoding("utf-8")
process.stdin.on('readable',()=>{
 let input = process.stdin.read();
    if(input){
        input = input.trim();
        if(input.startsWith('r')){
            stringRotator.emit('rotateRight');
        }
        else if(input.startsWith('l')){
            stringRotator.emit('rotateLeft');
        }
        else{
            process.exit(0);
        }
    }

})