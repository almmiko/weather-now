import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CityNamePipe, DegToCompassPipe, IconMapperPipe } from '@weather/pipes';
import { weatherDataResponse } from '@fixtures/weatherDataResponse';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockComponent } from '@mocks/MockComponent';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '@shared/components';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        IconMapperPipe,
        CityNamePipe,
        DegToCompassPipe,
        ButtonComponent,
        MockComponent({ selector: 'svg-icon'}),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.weather = weatherDataResponse;
    fixture.detectChanges();
  });

  it('should render all UI elements', () => {
    const compiled = fixture.debugElement;

    expect(compiled.query(By.css('svg-icon'))).toBeTruthy();
    expect(compiled.query(By.css('.cart-weather-city')).nativeElement.innerText).toBe('AMSTERDAM');
    expect(compiled.query(By.css('.cart-weather-state')).nativeElement.innerText).toBe('FEW CLOUDS');
    expect(compiled.query(By.css('.temperature')).nativeElement.innerText).toBe('20°');
    expect(compiled.query(By.css('.condition')).nativeElement.innerText).toBe('ENE 2 m/sec');
    expect(compiled.query(By.css('.cart-show-hourly'))).toBeTruthy();
    expect(compiled.query(By.css('.cart-hourly-weather-wrapper'))).toBeNull();
  });

  it('should show hourly weather forecast', () => {
    const compiled = fixture.debugElement;

    const button = compiled.query(By.css('button'));
    button.triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(component.isHourlyForecastShown).toBeTrue();
    expect(compiled.query(By.css('.cart-hourly-weather-wrapper'))).toBeTruthy();
    expect(compiled.query(By.css('.cart-hourly-weather')).children.length).toBe(4);

    expect(compiled.query(By.css('.cart-hourly-weather-time')).nativeElement.innerText).toBe('NOW');
    expect(compiled.query(By.css('.cart-hourly-weather-wind')).nativeElement.innerText).toBe('N 2 m/sec');
    expect(compiled.query(By.css('.cart-hourly-weather-temperature')).nativeElement.innerText).toBe('20°');
  });
});
