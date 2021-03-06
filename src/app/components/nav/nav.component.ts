import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  fav: string = "favorite_border";
  user: string = "person_outline";
  language = 'Az';
  menuOpenState: boolean = false;
  languageOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollContact() {
    document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
  }

}
