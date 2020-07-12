import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '@shared/layout';
import { LogoComponent } from '@shared/components';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, LogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo component', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('app-logo'))).toBeTruthy();
  });
});
