import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Story } from 'src/app/interfaces/story.interface';
import { StoryService } from 'src/app/services/story/story.service';
import { AddStoryPointComponent } from '../add-story-point/add-story-point.component';
let ELEMENT_DATA: Story[] = []
@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent {
  displayedColumns: string[] = ['name', 'point', 'description'];

  constructor(public dialog: MatDialog, private storyService: StoryService) { }
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.storyService.getStories().subscribe(arg => this.dataSource = new MatTableDataSource<Story>(arg));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStoryPointComponent, {
      width: '550px',
      data: { name: 'hai', animal: 'hello' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

