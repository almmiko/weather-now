import { Observable, of, Subject } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

export class DataResolver<T> {
  private BUFFER_SIZE = 1;
  private readonly errorSubject$ = new Subject<boolean>();

  readonly error$: Observable<boolean> = this.errorSubject$.pipe(
    shareReplay(this.BUFFER_SIZE)
  );

  readonly data$: Observable<T>;

  constructor(data: Observable<T>) {
    this.data$ = data.pipe(
      shareReplay(this.BUFFER_SIZE),
      catchError(() => {
        this.errorSubject$.next(true);
        return of() as Observable<T>;
      })
    );
  }
}
