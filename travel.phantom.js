var page = require('webpage').create(),
    system = require('system'),
    t, addres;


if(system.args.length === 1) {
    console.log('Usage: travel.phantom.js http://localhost:8080/');
    phantom.exit();
}

t = Date.now();
addres = system.args[1];
page.open(addres, function (status) {
    if(status !== 'success') {
        console.log('Fail to load the address');
    } else {
        t = Date.now() - t;
        console.log('Loading time ' + t + ' msec');
    }

    phantom.exit();
}); 
