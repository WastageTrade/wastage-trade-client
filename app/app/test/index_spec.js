describe('index page', function() {
  beforeAll(function() {
    browser.get('/#/');
  });

  it('should contain title of page', function() {
    expect(element(by.css('.navbar-header')).getText()).toEqual('WASTAGE TRADE');
  });

  it('should contain panel section', function() {
    expect(element(by.id('panel')).isPresent()).toBe(true);
  });

  it('should contain sign_up section', function() {
    expect(element(by.id('sign_up')).isPresent()).toBe(true);
  });

  it('should contain blog section', function() {
    expect(element(by.id('blog')).isPresent()).toBe(true);
  });

  it('should contain footer section', function() {
    expect(element(by.id('footer')).isPresent()).toBe(true);
  });
});
