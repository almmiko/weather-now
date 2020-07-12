import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degToCompass'
})
export class DegToCompassPipe implements PipeTransform {

  transform(deg: number): string {
    const value = Math.round((deg / 22.5) + 0.5);
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[value % 16];
  }

}
