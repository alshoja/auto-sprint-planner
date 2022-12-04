import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { Story } from 'src/app/interfaces/story.interface';
import { SharedService } from '../shared/shared.service';
const stories: Story[] = []

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor(private sharedService: SharedService) { }

  getStories(): Observable<Story[]> {
    return of(stories)
  }

  addStory(item: Story) {
    const duplicates = stories.filter((story) => story.storyName === item.storyName)
    if (!duplicates.length) {
      console.log('here s teh ', stories)
      const items = stories.push(item)
    } else {
      this.sharedService.openSnackBar('Duplicate names are not allowed!', 'Oops')
    }
    return stories
  }


}
