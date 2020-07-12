import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityName'
})
export class CityNamePipe implements PipeTransform {

  transform(timezone: string): string {
    return timezone.split('/')[1];
  }

}
