import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // every component must have template or templateUrl
  // Using external HTML file would be better if you need more than 3 lines of HTML code
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// component can be added by using CLI
// ng generate component NAME_OF_COMPONENT
// ng g c NAME_OF_COMPONENT
