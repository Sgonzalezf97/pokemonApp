import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
     public data: any
  ) {}


  // onNoClick(): void {
  //   this.dialogRef.close(false);
  // }

  onConfirm():void{
    this.dialogRef.close(true)
    window.location.href = "/pokemon/game"
  }

}
