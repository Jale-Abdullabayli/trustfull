import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  businessActivityChanged: boolean = false;
  userProfilPhoto: string;
  constructor() { }

  ngOnInit(): void {
  }

  setProfilPhoto(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.userProfilPhoto = event.target.result;
      }
    }
  }

  removeProfilePhoto(){
    this.userProfilPhoto="";
  }
}
