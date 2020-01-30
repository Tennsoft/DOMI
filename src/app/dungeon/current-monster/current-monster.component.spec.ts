import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMonsterComponent } from './current-monster.component';

describe('CurrentMonsterComponent', () => {
  let component: CurrentMonsterComponent;
  let fixture: ComponentFixture<CurrentMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
