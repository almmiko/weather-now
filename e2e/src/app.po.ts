import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class RootPage {

  rootSelector = 'app-weather-now-root';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getLogo(): ElementFinder {
    return element(by.css(`${this.rootSelector} app-logo`));
  }

  getCards(): ElementArrayFinder {
    return element.all(by.css(`${this.rootSelector} app-card`));
  }

  getCardButton(): ElementFinder {
    return element(by.css(`${this.rootSelector} app-button`));
  }

  getHourlyWeatherContainer(): ElementFinder {
    return element(by.css(`${this.rootSelector} .cart-hourly-weather-wrapper`));
  }
}
