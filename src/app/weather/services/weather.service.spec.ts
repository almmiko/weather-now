import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

    const weatherDataStub = {
      lat: 52.37,
      lon: 4.89,
      timezone: 'Europe/Amsterdam',
      timezone_offset: 7200,
      current: {
        dt: 1594559749,
        sunrise: 1594524792,
        sunset: 1594583916,
        temp: 19.57,
        feels_like: 18,
        pressure: 1028,
        humidity: 52,
        dew_point: 9.46,
        uvi: 6.79,
        clouds: 20,
        visibility: 10000,
        wind_speed: 2.1,
        wind_deg: 60,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
          }
        ]
      },
      hourly: [
        {
          dt: 1594558800,
          temp: 19.57,
          feels_like: 17.73,
          pressure: 1028,
          humidity: 52,
          dew_point: 9.46,
          clouds: 20,
          wind_speed: 2.48,
          wind_deg: 354,
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d'
            }
          ]
        },
        {
          dt: 1594562400,
          temp: 19.7,
          feels_like: 17.33,
          pressure: 1028,
          humidity: 50,
          dew_point: 9,
          clouds: 18,
          wind_speed: 3.07,
          wind_deg: 357,
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d'
            }
          ]
        },
      ]
    };

    service.fetchWeather().subscribe(weather => {
      expect(weather.length).toBe(2);
      expect(weather).toEqual([weatherDataStub, weatherDataStub]);
    });

    const req1 = httpMock.expectOne(urls[0]);
    const req2 = httpMock.expectOne(urls[1]);

    expect(req1.request.method).toBe('GET');
    expect(req2.request.method).toBe('GET');

    req1.flush(weatherDataStub);
    req2.flush(weatherDataStub);
  });
});
