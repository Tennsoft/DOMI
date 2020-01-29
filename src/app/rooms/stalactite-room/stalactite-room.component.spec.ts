import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalactiteRoomComponent } from './stalactite-room.component';

describe('StalactiteRoomComponent', () => {
  let component: StalactiteRoomComponent;
  let fixture: ComponentFixture<StalactiteRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalactiteRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalactiteRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
