import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Story } from 'src/app/interfaces/story.interface';
const stories: Story[] = [
  { name: 'Hydrogen', point: 1.0079, description: 'H' },
  { name: 'Helium', point: 4.0026, description: 'He' },
  { name: 'Lithium', point: 6.941, description: 'Li' }
];

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor() { }

  getStories(): Observable<Story[]> {
    return of(stories)
  }

  addStory(item: Story) {
    return stories.push(item)
  }
}
