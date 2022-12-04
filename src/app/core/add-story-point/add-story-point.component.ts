import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Story } from 'src/app/interfaces/story.interface';
import { StoryService } from 'src/app/services/story/story.service';

@Component({
  selector: 'app-add-story-point',
  templateUrl: './add-story-point.component.html',
  styleUrls: ['./add-story-point.component.css']
})

export class AddStoryPointComponent {

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
    public dialogRef: MatDialogRef<AddStoryPointComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  storyForm = this.fb.group({
    storyName: [null, Validators.compose([
      Validators.required])
    ],
    storyPoint: [null, Validators.required],
    description: [null],
  });

  onSubmit(): void {
    if (this.storyForm.valid) {
      this.storyService.addStory(this.storyForm.value as unknown as Story)
    }
    console.log(this.storyForm.value)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
