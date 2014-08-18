var sw = require('selenium-webdriver'),
    driver = new sw.Builder()
        .withCapabilities(sw.Capabilities.chrome())
        .build(),

    chai = require('chai'),
    chaiWebdriver = require('chai-webdriver');


chai.use(chaiWebdriver(driver));
driver.get('http://localhost:8080/');

chai.expect('#logo').dom.to.not.contain.text('THAI');


