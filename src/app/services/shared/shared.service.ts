import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { Story } from 'src/app/interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  storySubject = new Subject<any[]>();
  items: any[] = [];
  storyItems: any[] = [];

  constructor(private _snackBar: MatSnackBar) {
    this.storySubject = new BehaviorSubject<any>(new Array<Story>())
  }


  openSnackBar(message: string, type: string) {
    this._snackBar.open(message, type);
  }

  getAutoCalculatedStories(): Subject<Story[]> {
    console.log('this', this.storyItems)
    this.storySubject.next(this.storyItems);
    return this.storySubject
  }

  generateSubSetRec(stories: Story[], i: number, sum: number, current: any[]) {
    console.log('level up', this.storyItems.length)
    if (i === 0 && sum !== 0 && this.items[0][sum] !== 0) {
      current.push(stories[i]);
      this.storyItems = current;
      current = [];
      return;
    }
    if (i === 0 && sum === 0) {
      this.storyItems = current;
      current = [];
      return;
    }
    if (this.items[i - 1][sum]) {
      const currentValues = [...current];
      this.generateSubSetRec(stories, i - 1, sum, currentValues);
    }
    if (
      sum >= stories[i].storyPoint &&
      this.items[i - 1][sum - stories[i].storyPoint]
    ) {
      current.push(stories[i]);
      this.generateSubSetRec(stories, i - 1, sum - stories[i].storyPoint, current);
    }
  }

  calculateMaxStories(stories: Story[], arrayLength: number, sum: number) {
    if (arrayLength === 0 || sum < 0) return;

    for (let i = 0; i < arrayLength; i++) {
      this.items[i] = [];
      for (let j = 0; j < sum + 1; j++) this.items[i].push(false);
    }
    for (let i = 0; i < arrayLength; i++) this.items[i][0] = true;

    if (stories[0].storyPoint <= sum) this.items[0][stories[0].storyPoint] = true;

    for (let i = 1; i < arrayLength; i++) {
      for (let j = 0; j < sum + 1; j++) {
        if (stories[i].storyPoint <= j)
          this.items[i][j] =
            this.items[i - 1][j] || this.items[i - 1][j - stories[i].storyPoint];
        else this.items[i][j] = this.items[i - 1][j];
      }
    }

    if (this.items[arrayLength - 1][sum] === false) {
      console.log("There are no subsets with sum " + sum);
      return;
    }

    let current: number[] = [];
    this.generateSubSetRec(stories, arrayLength - 1, sum, current);
  }

  sumArray(stories: Story[]) {
    let total = 0;
    for (let i = 0; i < stories.length; i++) {
      total += stories[i].storyPoint;
    }
    return total;
  }

}
