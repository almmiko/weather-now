import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  fetchWeather(): Observable<any> {
    const n = this.http.get(`${environment.weatherAPIUrl}?lat=52.3667&lon=4.8945&exclude=daily, minutely&appid=${environment.weatherAPPID}&units=metric`);
    const n1 = this.http.get(`${environment.weatherAPIUrl}?lat=48.8566&lon=2.3522&exclude=daily, minutely&appid=${environment.weatherAPPID}&units=metric`);

    return forkJoin([n, n1]);
  }
}
