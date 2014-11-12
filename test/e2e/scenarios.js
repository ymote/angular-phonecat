'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });

    //增加测试模块
    it('should display the current filter value within an element with id "status"',
      function() {

      var query = element(by.model('query'));

      expect(element(by.css('#status')).getText())
        .toMatch(/Current filter:\s*$/);

      query.clear();
      query.sendKeys('nexus');
      expect(element(by.css('#status')).getText())
        .toMatch(/Current filter: nexus\s*$/);
    });


  });
});
