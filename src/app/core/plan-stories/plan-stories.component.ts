import { ChangeDetectorRef, Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Story } from 'src/app/interfaces/story.interface';
import { SharedService } from 'src/app/services/shared/shared.service';
import { StoryService } from 'src/app/services/story/story.service';

@Component({
  selector: 'app-plan-stories',
  templateUrl: './plan-stories.component.html',
  styleUrls: ['./plan-stories.component.css']
})
export class PlanStoriesComponent {
  items: any = []
  expandedIndex = 0;

  storyForm = this.fb.group({
    capacity: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private sharedService: SharedService, private storyService: StoryService) { }
  ngOnInit() {

  }

  onSubmit(): void {
    this.storyService.getStories().subscribe(stories => {
      let sum = this.storyForm.value['capacity'] as unknown as number;
      this.sharedService.getAutoCalculatedStories(stories, stories.length, sum).subscribe((stories: Story[]) => {
        this.items = stories
      })
    })
  }

  clearStories() {
    this.storyService.clearStories()
  }

  clearSprint() {
    this.items = []
    this.sharedService.clearStories()
  }


}
