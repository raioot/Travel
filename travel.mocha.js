var mocha = require('mocha'),
    page = require('webpage').create();



describe('input', function () {
    it('should set value as empty on focus', function (){
        page.open('http://localhost:8080/', function (status) {
            console.log('page loaded');
        });
    });
});