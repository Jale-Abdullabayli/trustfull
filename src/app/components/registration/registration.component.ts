import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  passwordVisibility: boolean = false;
  RepeatPasswordVisibility: boolean = false;
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$"),Validators.minLength(2)]],
      surname: ['', [Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    })
  }
get Name(){
  return this.registrationForm.get('name');
}
get Surname(){
  return this.registrationForm.get('surname');
}
get Email(){
  return this.registrationForm.get('email');
}
get Password(){
  return this.registrationForm.get('password');
}
get RepeatPassword(){
  return this.registrationForm.get('repeatPassword');
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
    if (this.registrationForm.valid) {
      alert("valid");
    }
    else {
      this.markAsTouched(this.registrationForm);
    }
  }

}
