var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox' }).build();
 
browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.' )
    browser.quit();
});
