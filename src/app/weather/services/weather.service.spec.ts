import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { weatherDataResponse } from '@fixtures/weatherDataResponse';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ WeatherService ]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<CityWeatherInfo[]> from #fetchWeather()', () => {
    const urls = [
      'test?lat=1&lon=1&exclude=daily, minutely&appid=test&units=metric',
      'test?lat=2&lon=2&exclude=daily, minutely&appid=test&units=metric'
    ];

    service.fetchWeather().subscribe(weather => {
      expect(weather.length).toBe(2);
      expect(weather).toEqual([weatherDataResponse, weatherDataResponse]);
    });

    const req1 = httpMock.expectOne(urls[0]);
    const req2 = httpMock.expectOne(urls[1]);

    expect(req1.request.method).toBe('GET');
    expect(req2.request.method).toBe('GET');

    req1.flush(weatherDataResponse);
    req2.flush(weatherDataResponse);
  });
});
