import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  businessActivityChanged: boolean = false;
  userProfilPhoto: string;
  personalForm: FormGroup;
  documents: FormArray;
  documentsName:string[]=new Array;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      biography: ['', [Validators.required,Validators.minLength(5)]],
      businessActivity: ['', Validators.required],
      businessEmail: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required,Validators.pattern("^[0-9+]*$")]],
      documents: this.formBuilder.array([
        this.createDocument()
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
  get ContactNumber() {
    return this.personalForm.get('contactNumber');
  }
  get Documents() {
    return this.personalForm.get('documents');
  }

  uploadFile(event,i:number){
    if(event.target.files.length > 0) 
  {
    this.documentsName[i]=event.target.files[0].name;
  }
  }
  createDocument(): FormControl {
    return this.formBuilder.control({})
  }

  addDocument(): void {
    this.documents = this.Documents as FormArray;
    this.documents.push(this.createDocument());
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
}
