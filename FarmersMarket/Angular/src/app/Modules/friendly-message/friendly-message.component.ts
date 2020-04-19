import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageModel } from 'src/app/Models/messageModel';

@Component({
  selector: 'app-friendly-message',
  templateUrl: './friendly-message.component.html',
  styleUrls: ['./friendly-message.component.scss']
})
export class FriendlyMessageComponent implements OnInit {

  message: MessageModel = new MessageModel();

  constructor(
    private dialogRef: MatDialogRef<FriendlyMessageComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) { 
    this.message = data;
  }

  ngOnInit(): void {
    if(this.message.timeout > 0) {
      setTimeout(() => {
        this.close();
      }, this.message.timeout);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
