describe('when navigate to a not found page', function() {
  beforeAll(function() {
    browser.get('/#/any_test_page');
  });

  it('should automatically redirect to /page-not-found', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/page-not-found");
  });

  it('should contain { 404 }', function() {
    expect(element(by.css('.container > h1')).getText()).toEqual('{ 404 }');
  });

  it('should not contain footer section', function() {
    expect(element(by.id('footer')).isPresent()).toBe(false);
  });
});
