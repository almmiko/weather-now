import { RootPage } from './app.po';
import { browser, logging } from 'protractor';

describe('weather-now root view', () => {
  let page: RootPage;

  beforeEach(() => {
    page = new RootPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display logo', () => {
    page.navigateTo();
    expect(page.getLogo().isDisplayed()).toBeTruthy();
  });

  it('should display 5 weather carts',() => {
    page.navigateTo();
    expect(page.getCards().count()).toBe(5);
  });

  it('should open hourly weather forecast', () => {
    page.navigateTo();
    page.getCardButton().click();

    expect(page.getHourlyWeatherContainer().isDisplayed()).toBeTruthy();
  });
});
