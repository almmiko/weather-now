import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo image', () => {
    const compiled = fixture.debugElement.nativeElement;
    const image = compiled.querySelector('img');

    expect(image.src).toContain('/assets/logo.svg');
    expect(compiled).toBeTruthy();
  });

  it('should have alt text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').alt).toContain('weather-now');
  });
});
