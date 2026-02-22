import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTask } from './today-task';

describe('TodayTask', () => {
  let component: TodayTask;
  let fixture: ComponentFixture<TodayTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
