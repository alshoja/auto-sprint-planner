import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-plan-stories',
  templateUrl: './plan-stories.component.html',
  styleUrls: ['./plan-stories.component.css']
})
export class PlanStoriesComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  storyForm = this.fb.group({
    capacity: [0, Validators.required],
  });

  constructor(private fb: FormBuilder,) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
