import { TreesSidebarPage } from './app.po';
import { browser, element, by, Key, protractor } from 'protractor';

describe('Xmas sidebar page', () => {
  let page: TreesSidebarPage;

  beforeEach(() => {
    page = new TreesSidebarPage();
    browser.driver.manage().window().setSize(1400, 900);
    page.navigateTo('mthood'); // 3 is mt hood, 4 is shoshone etc.
  });

  it('should have a sidebar', () => {
    expect<any>(element(by.id('sidebar-nav')).isDisplayed()).toBeTruthy();
  });

  it('should have a cutting section link', () => {
    expect<any>(element(by.id('cutting-instructions-link')).getText()).toEqual('How to cut your tree');
  });

  it('should have a locations link', () => {
    expect<any>(element(by.id('tree-locations-link')).getText()).toEqual('Where to find your tree');
  });

  it('should have a species section link', () => {
    expect<any>(element(by.id('tree-selection-link')).getText()).toEqual('How to choose your tree');
  });

  it('should have a plan your trip link', () => {
    expect<any>(element(by.id('trip-planning-link')).getText()).toEqual('How to plan your trip');
  });

  it('should go to plan your trip section if link is clicked', () => {
    element(by.id('trip-planning-link')).click();
    expect<any>(browser.driver.switchTo().activeElement().getAttribute('id')).toEqual('trip-planning');
  });

  it('should have a breadcrumb', () => {
    browser.sleep(500);
    expect<any>(element(by.css('.breadcrumbs')).getText()).toEqual(
      'Christmas tree permits > Find a forest > Mt. Hood National Forest Christmas tree permit information'
    );
  });

  it('should have a menu button and hide sidebar nav when resized to mobile', () => {
    browser.driver.manage().window().setSize(800, 1280);
    expect<any>(element(by.id('mobile-menu-btn')).isDisplayed()).toBeTruthy();
    expect<any>(element(by.id('sidebar-nav')).isDisplayed()).toBeFalsy();
  });

  it('should open menu if menu button is clicked', () => {
    browser.driver.manage().window().setSize(800, 1280);
    expect<any>(element(by.id('mobile-menu-btn')).isDisplayed()).toBeTruthy();
    element(by.id('mobile-menu-btn')).click();
    browser.sleep(500);
    expect<any>(element(by.id('sidenav-mobile')).isDisplayed()).toBeTruthy();
    browser.sleep(500);
    element(by.id('mobile-trip-planning-link')).click();
    expect<any>(browser.driver.switchTo().activeElement().getAttribute('id')).toEqual('trip-planning');
  });
});
