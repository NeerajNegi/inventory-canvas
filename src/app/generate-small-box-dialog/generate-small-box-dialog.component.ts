import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-generate-small-box-dialog',
  templateUrl: './generate-small-box-dialog.component.html',
  styleUrls: ['./generate-small-box-dialog.component.scss']
})
export class GenerateSmallBoxDialogComponent implements OnInit {

  boxCount: string = ''

  constructor(
    public dialogRef: MatDialogRef<GenerateSmallBoxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  public create() {
    this.dialogRef.close(this.boxCount)
  }

  public cancel() {
    this.dialogRef.close()
  }

}
