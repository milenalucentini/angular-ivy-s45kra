import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
ngOnInit(): void {
//throw new Error('Method not implemented.');
}
  name = 'Angular ' + VERSION.major;
}
