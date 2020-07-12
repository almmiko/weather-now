import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [WeatherComponent, CardComponent],
  exports: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class WeatherModule { }
