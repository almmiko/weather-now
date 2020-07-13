import { Config, config } from '@env/config';

export const environment: Config = {
  ...config,

  production: false,
  weatherAPIUrl: 'test',
  weatherAPPID: 'test',

  citiesCoordinate: [
    {
      lat: 1,
      lon: 1,
    },
    {
      lat: 2,
      lon: 2
    },
  ],
};
