exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['NewSpecEx.js'],
      onPrepare: function () {	
         browser.driver.manage().window().setSize(1680, 1050);
      },
   }