import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesCounterComponent } from './launches-counter.component';

describe('LaunchesCounterComponent', () => {
  let component: LaunchesCounterComponent;
  let fixture: ComponentFixture<LaunchesCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
