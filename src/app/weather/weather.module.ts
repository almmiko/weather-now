import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CityNamePipe } from './pipes/city-name.pipe';
import { DegToCompassPipe } from './pipes/deg-to-compass.pipe';
import { IconMapperPipe } from './pipes/icon-mapper.pipe';

@NgModule({
  declarations: [WeatherComponent, CardComponent, CityNamePipe, DegToCompassPipe, IconMapperPipe],
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
