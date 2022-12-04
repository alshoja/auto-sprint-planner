import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent {
  displayedColumns: string[] = ['name', 'point', 'description'];
  dataSource = new MatTableDataSource<Story>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
