import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBoxComponent } from './dev-box.component';

describe('DevBoxComponent', () => {
  let component: DevBoxComponent;
  let fixture: ComponentFixture<DevBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
