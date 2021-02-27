import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  passwordVisibility: boolean = false;
  RepeatPasswordVisibility: boolean = false;
  registrationForm: FormGroup;
  termsAndConditionsChecked:boolean=false;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$"),Validators.minLength(2)]],
      surname: ['', [Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', [Validators.required]]
    },
    {
      validator: this.passwordConfirming
    }
    )
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

passwordConfirming(c: AbstractControl): { invalid: boolean } {
  if (c.get('password').value !== c.get('repeatPassword').value) {
      return {invalid: true};
  }}

  
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
        if(this.termsAndConditionsChecked){
          alert("valid");
        }
        else{
          alert("Please agree with terms and conditions")
        }
      }
      else {
        this.markAsTouched(this.registrationForm);
      }
    
    
  }

}
