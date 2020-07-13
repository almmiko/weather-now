import { DataResolver } from './data-resolver';
import { of, throwError } from 'rxjs';

describe('DataResolver', () => {
  it('should return data if no errors', () => {
    const dataResolver = new DataResolver(of('test'));

    dataResolver.data$.subscribe(data => {
      expect(data).toBe('test');
    });
  });

  it('should return error if error occurred', () => {
    const dataResolver = new DataResolver(throwError('error'));

    dataResolver.error$.subscribe(err => {
      expect(err).toBeTrue();
    });

    dataResolver.data$.subscribe();
  });
});
