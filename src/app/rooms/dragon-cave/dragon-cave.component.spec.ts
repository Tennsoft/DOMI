import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCaveComponent } from './dragon-cave.component';

describe('DragonCaveComponent', () => {
  let component: DragonCaveComponent;
  let fixture: ComponentFixture<DragonCaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
