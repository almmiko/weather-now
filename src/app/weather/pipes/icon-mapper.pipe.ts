import { Pipe, PipeTransform } from '@angular/core';

const dayIcons = {
  '01d': 'sunny-day',
  '02d': 'partially-cloudy',
  '03d': 'overcast-day',
  '04d': 'overcast-day',
  '09d': 'drizzle',
  '10d': 'rainy-day',
  '11d': 'lighting',
  '13d': 'cold',
  '50d': 'mist',
};

const nightIcons = {
  '01n': 'night',
  '02n': 'dark-night',
  '03n': 'overcast-day',
  '04n': 'overcast-day',
  '09n': 'drizzle',
  '10n': 'rainy-day',
  '11n': 'lighting',
  '13n': 'cold',
  '50n': 'mist',
};

@Pipe({
  name: 'iconMapper'
})
export class IconMapperPipe implements PipeTransform {

  transform(iconDescription: string): string {
    return dayIcons[iconDescription] || nightIcons[iconDescription];
  }

}
