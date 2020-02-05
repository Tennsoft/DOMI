import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFightComponent } from './current-fight.component';

describe('CurrentFightComponent', () => {
  let component: CurrentFightComponent;
  let fixture: ComponentFixture<CurrentFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
