//var event = require('events');
var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');
var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');


//READING FILE CONTENT

fs.readdir('./ToRead', 'utf-8', function(err, files) {
    
    console.log('Pliki w folderze: ', files);

var array = new Array(files);

    fs.writeFile('./File_list.txt', array, function(err) {
        if(err) throw err;
        console.log('Pliki zostały zapisane'.green);
    });
});

//Zadanie z tresci rozdzialu
fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    
    console.log(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    
    console.log('Dane przed zapisem'.blue);
    console.log(data);
    
    fs.appendFile('./tekst.txt', '\n A tak wyglądają dane po zapisie', function(err) {
        if(err) throw err;
        console.log('Zapisano!');
        
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
        console.log('Dane po zapisie'.blue);
        console.log(data);
        });
    })
});

//EVENT EMITTER
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