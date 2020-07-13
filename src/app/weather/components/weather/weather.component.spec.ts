import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { MockComponent } from '@mocks/MockComponent';
import { WeatherService } from '@weather/services/weather.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  const fetchWeatherSpy =  jasmine.createSpy('fetchWeather').and.returnValue(of([]));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        MockComponent({ selector: 'app-card'}),
      ],
      providers: [
        {
          provide: WeatherService,
          useValue: { fetchWeather: fetchWeatherSpy }
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call weatherData', () => {
    expect(component.weatherData.data$).toBeInstanceOf(Observable);
    expect(fetchWeatherSpy).toHaveBeenCalled();
    expect(fetchWeatherSpy).toHaveBeenCalledTimes(1);
  });
});
