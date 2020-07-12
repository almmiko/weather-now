import { DegToCompassPipe } from './deg-to-compass.pipe';

describe('DegToCompassPipe', () => {
  let pipe: DegToCompassPipe;

  beforeEach(() => {
    pipe = new DegToCompassPipe();
  });

  it('should return correct compass value', () => {
    expect(pipe.transform(15)).toBe('NNE');
    expect(pipe.transform(45)).toBe('ENE');
  });
});
