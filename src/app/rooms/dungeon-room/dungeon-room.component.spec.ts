import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonRoomComponent } from './dungeon-room.component';

describe('DungeonRoomComponent', () => {
  let component: DungeonRoomComponent;
  let fixture: ComponentFixture<DungeonRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
