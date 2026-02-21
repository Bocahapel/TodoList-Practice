import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBar } from './detail-bar';

describe('DetailBar', () => {
  let component: DetailBar;
  let fixture: ComponentFixture<DetailBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
