import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgIfContext } from '@angular/common';
import { DataResolver } from '@shared/utils/data-resolver';

@Component({
  selector: 'app-loading-or-failure',
  templateUrl: './loading-or-failure.component.html',
  styleUrls: ['./loading-or-failure.component.scss']
})
export class LoadingOrFailureComponent {
  @ViewChild('template') template: TemplateRef<NgIfContext<any>>;
  @Input() dataResolver: DataResolver<any>;
  @Input() errorMessage = 'A error occurred!';
  @Input() loadingMessage = 'Loading...';
}
