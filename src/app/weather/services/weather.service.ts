import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { forkJoin, Observable } from 'rxjs';
import { CityWeatherInfo } from '@weather/services/weather.types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  fetchWeather(): Observable<CityWeatherInfo[]> {
    const { citiesCoordinate, weatherAPIUrl, weatherAPPID } = environment;

    const observables = citiesCoordinate.map(coordinate =>
      this.http.get(`${weatherAPIUrl}?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=daily, minutely&appid=${weatherAPPID}&units=metric`));

    return forkJoin(observables) as Observable<CityWeatherInfo[]>;
  }
}
