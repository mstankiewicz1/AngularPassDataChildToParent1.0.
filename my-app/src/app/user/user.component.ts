import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  sendData() {
    let data = { 
      name: 'Marek',
      age: 30
    }
    this.parentFunction.emit(data);
  }

}
