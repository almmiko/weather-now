import { IconMapperPipe } from './icon-mapper.pipe';

describe('IconMapperPipe', () => {
  let pipe: IconMapperPipe;

  beforeEach(() => {
    pipe = new IconMapperPipe();
  });

  it('should map day icons', () => {
    const result = pipe.transform('01d');
    expect(result).toBe('sunny-day');
  });

  it('should map night icons', () => {
    const result = pipe.transform('01n');
    expect(result).toBe('night');
  });

  it('should return undefined if no match', () => {
    const result = pipe.transform('missing');
    expect(result).toBeUndefined();
  });
});
