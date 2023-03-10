import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInheritedComponent } from './input-inherited.component';

describe('InputInheritedComponent', () => {
  let component: InputInheritedComponent;
  let fixture: ComponentFixture<InputInheritedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputInheritedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputInheritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
