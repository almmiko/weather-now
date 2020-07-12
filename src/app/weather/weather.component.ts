import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@weather/services/weather.service';
import { map } from 'rxjs/operators';
import { CityWeatherInfo } from '@weather/services/weather.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData$: Observable<CityWeatherInfo[]>;

  constructor(private weatherService: WeatherService) {
    this.weatherData$ = weatherService.fetchWeather().pipe(map(weather => weather));
  }

  ngOnInit(): void {}

  trackByFn(index, item): string {
    return item.timezone;
  }
}
