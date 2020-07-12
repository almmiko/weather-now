import { IconMapperPipe } from './icon-mapper.pipe';
import { CityNamePipe } from './city-name.pipe';
import { DegToCompassPipe } from './deg-to-compass.pipe';

export const pipes = [
  IconMapperPipe,
  CityNamePipe,
  DegToCompassPipe,
];

export * from './icon-mapper.pipe';
export * from './city-name.pipe';
export * from './deg-to-compass.pipe';
