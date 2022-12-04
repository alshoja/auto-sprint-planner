import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStoriesComponent } from './plan-stories.component';

describe('PlanStoriesComponent', () => {
  let component: PlanStoriesComponent;
  let fixture: ComponentFixture<PlanStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
