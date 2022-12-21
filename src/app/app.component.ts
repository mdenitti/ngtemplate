import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {title: 'Devices',
    detail:'This is the details of the devices'},
    {title: 'Users',
    detail:'This is the details of the users'}
  ];
}
