import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { WeatherModule } from '@weather/weather.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    WeatherModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
