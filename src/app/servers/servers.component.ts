import { Component, OnInit } from '@angular/core';

@Component({
  // selecting by ID, pseudo-selectors are not supported by Angular
  selector: 'app-servers',
  // selector: '[app-servers]', // change selector to be an attribute
  // selector: '.app-servers', // change selector to be an class
  // every component must have template or templateUrl
  // Using external HTML file would be better if you need more than 3 lines of HTML code
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
// component can be added by using CLI
// ng generate component NAME_OF_COMPONENT
// ng g c NAME_OF_COMPONENT
