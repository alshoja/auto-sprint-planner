import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, type: string) {
    this._snackBar.open(message, type);
  }
}
