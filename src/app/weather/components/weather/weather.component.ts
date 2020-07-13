import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { WeatherService } from '@weather/services/weather.service';
import { CityWeatherInfo } from '@weather/services/weather.types';
import { DataResolver } from '@shared/utils/data-resolver';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterContentChecked {

  weatherData: DataResolver<CityWeatherInfo[]>;

  constructor(private weatherService: WeatherService, private changeDetectorRef: ChangeDetectorRef) {
    this.weatherData = new DataResolver(weatherService.fetchWeather());
  }

  trackByFn(index, item): string {
    return item.timezone;
  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
