import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryPointComponent } from './add-story-point.component';

describe('AddStoryPointComponent', () => {
  let component: AddStoryPointComponent;
  let fixture: ComponentFixture<AddStoryPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStoryPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStoryPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
