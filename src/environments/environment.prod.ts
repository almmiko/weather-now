import { Config, config } from '@env/config';

export const environment: Config = {
  ...config,

  production: true
};
