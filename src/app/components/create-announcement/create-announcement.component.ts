import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent implements OnInit {
  serviceTypeChanged: boolean = false;
  currencyChanged: boolean = false;
  businessActivityChanged: boolean = false;
  locationChanged: boolean = false;
  regionChanged: boolean = false;
  announcementForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.announcementForm = this.formBuilder.group({
      businessActivity: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      requirements: [''],
      serviceType: ['', Validators.required],
      price: [''],
      currency: [''],
      location: ['', Validators.required],
      region: [''],
      additionalLocationInfo: [''],
      servicePhoto: ['', Validators.required],
      introductionLinks: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      dateRange: [''],
    })
  }

  get BusinessActivity() {
    return this.announcementForm.get('businessActivity');
  }
  get Title() {
    return this.announcementForm.get('title');
  }
  get Description() {
    return this.announcementForm.get('description');
  }
  get Requirements() {
    return this.announcementForm.get('requirements');
  }
  get ServiceType() {
    return this.announcementForm.get('serviceType');
  }
  get Price() {
    return this.announcementForm.get('price');
  }
  get Currency() {
    return this.announcementForm.get('currency');
  }
  get Location() {
    return this.announcementForm.get('location');
  }
  get Region() {
    return this.announcementForm.get('region');
  }
  get AdditionalLocationInfo() {
    return this.announcementForm.get('additionalLocationInfo');
  }
  get ServicePhoto() {
    return this.announcementForm.get('servicePhoto');
  }
  get IntroductionLinks() {
    return this.announcementForm.get('introductionLinks') as FormArray;
  }
  get DateRange() {
    return this.announcementForm.get('dateRange');
  }


  servicePhotoUpload(event) {
    if (event.target.files.length > 0) {
      this.announcementForm.patchValue({
        servicePhoto: event.target.files[0].name
      })
    }
  }

  changeServiceType(value) {
    this.serviceTypeChanged = true;
    if (value == "Volunteering") {
      this.Price.clearValidators();
      this.Price.updateValueAndValidity();
      this.Currency.clearValidators();
      this.Currency.updateValueAndValidity();
    }
    else {
      this.Price.setValidators([Validators.required, Validators.pattern("^[0-9.]*$")]);
      this.Price.updateValueAndValidity();
      this.Currency.setValidators(Validators.required)
      this.Currency.updateValueAndValidity();
    }
  }

  changeLocation(value) {
    this.locationChanged = true;
    if (value == "Online") {
      this.Region.clearValidators();
      this.Region.updateValueAndValidity();
    }
    else {
      this.Region.setValidators(Validators.required);
      this.Region.updateValueAndValidity();
    }
  }

  addIntroductionLink(): void {
   this.IntroductionLinks.push(this.formBuilder.control(''));
  }


  markAsTouched(form: FormGroup | FormArray) {
    for (let control in form.controls) {
      if (form.controls[control] instanceof FormControl) {
        form.controls[control].markAsTouched();
      }
      else {
        this.markAsTouched(form.controls[control]);
      }
    }
  }

  onSubmit() {
    if (this.announcementForm.valid) {
      alert("valid");
    }
    else {
      this.markAsTouched(this.announcementForm);
    }
  }

  removeIntroductionLink(index:number){
    this.IntroductionLinks.removeAt(index);
  }

}
