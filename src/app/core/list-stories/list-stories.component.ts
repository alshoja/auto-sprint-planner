import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddStoryPointComponent } from '../add-story-point/add-story-point.component';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent {
  displayedColumns: string[] = ['name', 'point', 'description'];
  dataSource = new MatTableDataSource<Story>(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

export interface Story {
  name: string;
  point: number;
  description: string;
}

const ELEMENT_DATA: Story[] = [
  { name: 'Hydrogen', point: 1.0079, description: 'H' },
  { name: 'Helium', point: 4.0026, description: 'He' },
  { name: 'Lithium', point: 6.941, description: 'Li' },
];
