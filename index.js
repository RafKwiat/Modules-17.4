//var event = require('events');
var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');
var fs = require('fs');
var StatMode = require('stat-mode');



fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    
    console.log(stats);
    console.log(statMode.toString());
});
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data);
});


var emitter = new EventEmitter();
emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        emitter.emit('beforeCommand', instruction);
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case 'sayhello':
                process.stdout.write('Hello world!\n');
                break;
            case 'getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction\n');  
        };
        
        emitter.emit('afterCommand');
    }
});