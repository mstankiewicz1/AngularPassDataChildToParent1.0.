import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  name="";

  parentFunction(data: any) {
    console.log(data);
    this.name = data.name;
  }
}
