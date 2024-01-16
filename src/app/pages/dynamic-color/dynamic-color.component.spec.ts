import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColorComponent } from './dynamic-color.component';

describe('DynamicColorComponent', () => {
  let component: DynamicColorComponent;
  let fixture: ComponentFixture<DynamicColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
