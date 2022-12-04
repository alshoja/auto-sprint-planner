import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-story-point',
  templateUrl: './add-story-point.component.html',
  styleUrls: ['./add-story-point.component.css']
})

export class AddStoryPointComponent {

  storyForm = this.fb.group({
    storyName: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    storyPoint: [null, Validators.required],
    description: [null],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddStoryPointComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onSubmit(): void {
    alert('Thanks!');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
