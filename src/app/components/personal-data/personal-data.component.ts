import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  phoneMask=['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  businessActivityChanged: boolean = false;
  userProfilPhoto: string;
  personalForm: FormGroup;
  documentsName:string[]=new Array;
  total:string;
  currentPage: number = 1;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.personalForm = this.formBuilder.group({
      biography: ['', [Validators.required,Validators.minLength(5)]],
      businessActivity: ['', Validators.required],
      businessEmail: ['', [Validators.required, Validators.email]],
      callNumber: ['', [Validators.required]],
      whatsappNumber: [''],
      telegramNumber: [''],
      identityCard:[''],
      certificates: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      diplomas: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    })
  }

  get Biography() {
    return this.personalForm.get('biography');
  }
  get BusinessActivity() {
    return this.personalForm.get('businessActivity');
  }
  get BusinessEmail() {
    return this.personalForm.get('businessEmail');
  }
  get CallNumber() {
    return this.personalForm.get('callNumber');
  }
  get WhatsappNumber() {
    return this.personalForm.get('whatsappNumber');
  }
  get TelegramNumber() {
      return this.personalForm.get('telegramNumber');
  }
  get Certificates() {
    return this.personalForm.get('certificates') as FormArray;
  }

  get Diplomas() {
    return this.personalForm.get('diplomas') as FormArray;
  }
  uploadFile(event,i:number){
    if(event.target.files.length > 0) 
  {
    this.documentsName[i]=event.target.files[0].name;
  }
  }
  

  addCertificate(): void {   
    this.Certificates.push(this.formBuilder.control(''));
  }

  addDiploma(): void {
    this.Diplomas.push(this.formBuilder.control(''));
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
    if (this.personalForm.valid) {
      alert("valid");
    }
    else {
      this.markAsTouched(this.personalForm);
    }
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
  removeProfilePhoto() {
    this.userProfilPhoto = "";
  }
  deleteAnnouncement() {
    if (confirm('Are you sure you want to delete this announcement?')) {

    } else {
    }
  }
  removeCertificate(index:number){
    this.Certificates.removeAt(index);
  }
  removeDiploma(index:number){
    this.Diplomas.removeAt(index);
  }
  pageChanged(event){
    this.currentPage=event;
  }
}
