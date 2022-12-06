import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Story } from 'src/app/interfaces/story.interface';
import { SharedService } from '../shared/shared.service';
let stories: Story[] = []

@Injectable({
  providedIn: 'root'
})

export class StoryService {
  storySubject = new Subject<any[]>();
  constructor(private sharedService: SharedService) {
    this.storySubject = new BehaviorSubject<Story[]>(new Array<Story>())
  }

  getStories(): Subject<Story[]> {
    this.storySubject.next(stories);
    return this.storySubject
  }

  addStory(item: Story) {
    const duplicates = stories.filter((story) => story.storyName === item.storyName)
    if (!duplicates.length) {
      const items = stories.push(item)
      this.sharedService.openSnackBar('New story has been successfully added', 'Info')
    } else {
      this.sharedService.openSnackBar('Duplicate names are not allowed!', 'Oops')
    }
    return stories
  }

  clearStories() {
    stories = []
    this.storySubject.next([]);
  }
}
