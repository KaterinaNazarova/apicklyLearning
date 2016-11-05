require('jasmine2-custom-message');

describe('REST API testing', function() {
  var token;

  //авторизаця
  it('login and getting the token', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://disk.yandex.ru/');

    var btn = element(by.id('nb-21'));
    var login = element(by.id('nb-22'));
    var password = element(by.id('nb-23'));

    var getTokenBtn;

    login.sendKeys('Kettylove17');
    password.sendKeys('13091988nick');
    btn.click();

    browser.get('https://tech.yandex.ru/disk/poligon/');

    var name = element(by.xpath('//div/a/span[@class="user__name"]'));
    //name.getText().then(console.log);

    since('You didnt authorized')
    .expect(name.getText())
    .toEqual('Kettylove17');

    // If we authorized we can get the token
    getTokenBtn = element(by.xpath('//div[@class="swagger__right"]/a'));
    getTokenBtn.click();

    token = element(by.xpath('//div[@class="swagger__left"]//input'));
    token.getAttribute('value').then(console.log);
  });

  //  // Testing API
  //  it('get testing token', function() {
  //
  //  });
});
