import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.scss']
})
export class ConfirmdialogComponent {
  
  constructor(
    public dialogo: MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    closeDialog(): void {
      this.dialogo.close(false);
    }

    confirmDialog(): void {
      this.dialogo.close(true);
    }
    
}
