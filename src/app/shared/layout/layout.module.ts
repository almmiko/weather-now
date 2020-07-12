import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import * as layoutComponents from '@shared//layout';

@NgModule({
  declarations: [
    ...layoutComponents.components,
  ],
  exports: [
    ...layoutComponents.components,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class LayoutModule { }
