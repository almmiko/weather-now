import { CityNamePipe } from './city-name.pipe';

describe('CityNamePipe', () => {
  let pipe: CityNamePipe;

  beforeEach(() => {
    pipe = new CityNamePipe();
  });

  it('should return city name', () => {
    expect(pipe.transform('test/test')).toBe('test');
    expect(pipe.transform('')).toBeUndefined();
  });
});
