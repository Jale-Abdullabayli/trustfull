import { Component, ElementRef, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent implements OnInit {
  serviceTypeChanged:boolean=false;
  currencyChanged:boolean=false;
  businessActivityChanged:boolean=false;
  location:boolean;

  
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }


  changeLocation($event: MatRadioChange){
    if($event.value=='online'){
      this.location=false;
    }
    else{
      this.location=true;

    }
  }

}
