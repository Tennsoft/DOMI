import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageRoomComponent } from './storage-room.component';

describe('StorageRoomComponent', () => {
  let component: StorageRoomComponent;
  let fixture: ComponentFixture<StorageRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
