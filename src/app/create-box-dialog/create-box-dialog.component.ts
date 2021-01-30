import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-box-dialog',
  templateUrl: './create-box-dialog.component.html',
  styleUrls: ['./create-box-dialog.component.scss']
})
export class CreateBoxDialogComponent implements OnInit {

  boxName: string = ''

  constructor(
    public dialogRef: MatDialogRef<CreateBoxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  public create() {
    this.dialogRef.close(this.boxName)
  }

  public cancel() {
    this.dialogRef.close()
  }

}
