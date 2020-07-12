import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import * as weatherPipes from '@weather/pipes';
import * as weatherComponents from '@weather/components';

@NgModule({
  declarations: [...weatherComponents.components, ...weatherPipes.pipes],
  exports: [
    weatherComponents.WeatherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class WeatherModule { }
