import { Component } from '@angular/core';
import { WeatherService } from './weather/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private weatherService: WeatherService) {
    weatherService.fetchWeather().subscribe((data) => {
      console.log(data);
    });
  }

  title = 'weather-now';
}
