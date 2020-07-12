import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CityWeatherInfo } from '@weather/services/weather.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  @Input() weather: CityWeatherInfo;

  isHourlyForecastShown = false;

  showHourlyForecast(): void {
    this.isHourlyForecastShown = true;
  }

  trackByFn(index, item): string {
    return item.dt;
  }
}
