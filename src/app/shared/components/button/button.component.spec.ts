import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.config = { text: 'test button'};

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render provided text', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('button')).nativeElement.innerText).toBe('TEST BUTTON');
  });

  it('should have onClick method', () => {
    spyOn(component, 'onClick');
    fixture.debugElement.nativeElement.querySelector('button').click();
    expect(component.onClick).toHaveBeenCalled();
  });
});
