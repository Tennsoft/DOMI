import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampRoomComponent } from './camp-room.component';

describe('CampRoomComponent', () => {
  let component: CampRoomComponent;
  let fixture: ComponentFixture<CampRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
