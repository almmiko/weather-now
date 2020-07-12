import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CityWeatherInfo } from '@weather/services/weather.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() weather: CityWeatherInfo;

  constructor() { }

  ngOnInit(): void {
  }

  onClickReceived(): void {
    console.log('click');
  }

  trackByFn(index, item): string {
    return item.dt;
  }
}
