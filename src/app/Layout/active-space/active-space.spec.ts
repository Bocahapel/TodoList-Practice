import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSpace } from './active-space';

describe('ActiveSpace', () => {
  let component: ActiveSpace;
  let fixture: ComponentFixture<ActiveSpace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveSpace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveSpace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
