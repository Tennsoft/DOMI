import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeRoomComponent } from './lake-room.component';

describe('LakeRoomComponent', () => {
  let component: LakeRoomComponent;
  let fixture: ComponentFixture<LakeRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakeRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
