//define the title bar and buttons
var HomePage = function() {
	this.titleBarButtons = element(by.css(".king-header-wrapper.hidden-xs"));

	this.logoButton = this.titleBarButtons.element(by.css(".king-site-logo"));
	this.emailUs = this.titleBarButtons.element(by.css(".iconfont.iconfont-mail"));
	this.visitUs = this.titleBarButtons.element(by.css(".iconfont.iconfont-location"));

};

//test to see if buttons are there
describe('brilliantearth.com', function() {
	var homepage = new HomePage();

	beforeEach(function() {
		browser.driver.get('https://www.brilliantearth.com/');
		browser.findElement(By.css(".optanon-alert-box-button.optanon-button-allow")).click();
		browser.driver.sleep(3000);
	});

	it('should have some buttons', function() {
		expect(homepage.logoButton.isDisplayed()).toBe(true);
		expect(homepage.emailUs.isDisplayed()).toBe(true);
		expect(homepage.visitUs.isDisplayed()).toBe(true);

		//Check result is not false positive, this should have an error
		//expect(homepage.logoButton.isDisplayed()).toBe(false);

	});
});



var ContactFormModal = function() {
		this.contactFormModal = element.all(by.css(".modal-content")).get(1);
	};

//test contact form modal
xdescribe('Contact Form', function() {
		var homePage = new HomePage();
		var contactFormModal = new ContactFormModal();

	beforeEach(function() {
		browser.driver.get('https://www.brilliantearth.com/');
			browser.manage().timeouts().implicitlyWait(10000);

	});


		it('should open a contact form', async () => {

			await browser.findElement(By.css(".optanon-alert-box-button.optanon-button-allow")).click();
			
			browser.driver.sleep(3000);

			var cookieWarning = element(By.css(".optanon-alert-box-button.optanon-button-allow"));
			
			expect(await cookieWarning.isDisplayed()).toBe(false);
			
			browser.driver.sleep(2000);

			browser.findElement(By.css(".mail_to_support.navitem")).click();

			browser.driver.sleep(3000);

			expect(contactFormModal.contactFormModal.isDisplayed()).toBe(true);
		

		});

	});


//test Scroll and email sign-up
xdescribe('Scroll to email', function() {
			var homePage = new HomePage();
			var thanks = element(By.css(".thx-message"));
			

		beforeEach(function() {
			browser.driver.get('https://www.brilliantearth.com/');
			browser.manage().timeouts().implicitlyWait(10000);

		});

		it('should scroll down', async () => {
			
			await browser.findElement(By.css(".optanon-alert-box-button.optanon-button-allow")).click();
			
			browser.driver.sleep(3000);

			var cookieWarning = element(By.css(".optanon-alert-box-button.optanon-button-allow"));
			
			expect(await cookieWarning.isDisplayed()).toBe(false);

			browser.executeScript('window.scrollTo(0,3600);').then(function() {
   					browser.driver.sleep(3000);
				});
			browser.element(By.css(".form-control.email-input")).sendKeys('name@email.com');
			browser.element.all(By.css(".icons-checkbox")).get(0).click();
			
			browser.driver.sleep(3000);
			browser.element.all(By.css(".btn.btn-success.btn-default")).get(0).click();
			
			browser.driver.sleep(3000);
			expect(thanks.isDisplayed()).toBe(true);


		});
});

