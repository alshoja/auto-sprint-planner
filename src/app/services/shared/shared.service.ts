import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { Story } from 'src/app/interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  story$ = new Subject<any[]>();
  items: any[] = [];
  storyItems: any[] = [];

  constructor(private _snackBar: MatSnackBar) {
    this.story$ = new BehaviorSubject<Story[]>(new Array<Story>())
  }

  openSnackBar(message: string, type: string) {
    this._snackBar.open(message, type);
  }

  getAutoCalculatedStories(stories: Story[], arrayLength: number, capacity: number,): Subject<Story[]> {
    if (capacity > this.getSumOfStoryPoints(stories)) {
      this.storyItems = stories
      this.story$.next(this.storyItems);
    } else {
      this.calculateMaxStories(stories, arrayLength, capacity);
    }
    this.story$.next(this.storyItems);
    return this.story$
  }

  generateSubSetRec(stories: Story[], i: number, capacity: number, current: any[]) {
    if (i === 0 && capacity !== 0 && this.items[0][capacity] !== 0) {
      current.push(stories[i]);
      this.storyItems = current;
      current = [];
      return;
    }
    if (i === 0 && capacity === 0) {
      this.storyItems = current;
      current = [];
      return;
    }
    if (this.items[i - 1][capacity]) {
      const currentValues = [...current];
      this.generateSubSetRec(stories, i - 1, capacity, currentValues);
    }
    if (
      capacity >= stories[i].storyPoint &&
      this.items[i - 1][capacity - stories[i].storyPoint]
    ) {
      current.push(stories[i]);
      this.generateSubSetRec(stories, i - 1, capacity - stories[i].storyPoint, current);
    }
  }

  calculateMaxStories(stories: Story[], storyArrayLength: number, capacity: number) {
    if (storyArrayLength === 0 || capacity < 0) return;

    for (let i = 0; i < storyArrayLength; i++) {
      this.items[i] = [];
      for (let j = 0; j < capacity + 1; j++) this.items[i].push(false);
    }
    for (let i = 0; i < storyArrayLength; i++) this.items[i][0] = true;

    if (stories[0].storyPoint <= capacity) this.items[0][stories[0].storyPoint] = true;

    for (let i = 1; i < storyArrayLength; i++) {
      for (let j = 0; j < capacity + 1; j++) {
        if (stories[i].storyPoint <= j)
          this.items[i][j] =
            this.items[i - 1][j] || this.items[i - 1][j - stories[i].storyPoint];
        else this.items[i][j] = this.items[i - 1][j];
      }
    }

    if (this.items[storyArrayLength - 1][capacity] === false) {
      this.openSnackBar("Sorry there are no stories available with capacity " + capacity, 'Oops')
      return;
    }

    let current: number[] = [];
    this.generateSubSetRec(stories, storyArrayLength - 1, capacity, current);
  }

  getSumOfStoryPoints(stories: Story[]) {
    let total = 0;
    for (let i = 0; i < stories.length; i++) {
      total += stories[i].storyPoint;
    }
    return total;
  }

  clearStories() {
    this.storyItems = []
  }

}
