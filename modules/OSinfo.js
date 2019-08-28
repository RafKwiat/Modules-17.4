var os = require('os');
var times = require('./timeFormat');

function getOSinfo() {
        var type = os.type();

        if(type === 'Darwin') {
            type = 'OSX';
        } else if(type === 'Windows_NT') {
            type = 'Windows';
        }
        var release = os.release();
        var cpu = os.cpus()[0].model;
        var uptime = os.uptime();
        var userInfo = os.userInfo();
        console.log('System: ', type);
        console.log('Release: ', release);
        console.log('CPU model: ', cpu);
        console.log('Uptime:~ ', (uptime / 60).toFixed(0), 'min');
        console.log('User name: ', userInfo.username);
        console.log('Home dir: ', userInfo.homedir);    
}
exports.print = getOSinfo;

//TIME CONVERTER

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input >= 0 || input !== null) {
        
        switch(input) {
            case '/exit':
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction\n');  
        };
    }
times.timeConvert();