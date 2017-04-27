import {Component, Input, OnInit} from '@angular/core';
import {Message} from "./message/message";
import {MessageTypeEnum} from "./message/message-type.enum";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()message: Message;
  success = MessageTypeEnum.SUCCESS;
  error = MessageTypeEnum.ERROR;
  constructor() { }

  ngOnInit() {
    /*this.message = new Message();
    this.message.text = "Invalid user: Username or password is incorrect.";
    this.message.type = MessageTypeEnum.ERROR;*/
    /*this.error = true;*/
  }



}
