import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitalControlRoomComponent } from './orbital-control-room.component';

describe('OrbitalControlRoomComponent', () => {
  let component: OrbitalControlRoomComponent;
  let fixture: ComponentFixture<OrbitalControlRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitalControlRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitalControlRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
