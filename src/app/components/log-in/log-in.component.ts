import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  value: string = "";
  passwordVisibility: boolean = false;
  logInForm: FormGroup;
  logined:boolean=false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  get Email(){
    return this.logInForm.get('email');
  }
  get Password(){
    return this.logInForm.get('password');
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
    if (this.logInForm.valid) {
      this.logined=true;
    }
    else {
      this.markAsTouched(this.logInForm);
    }
  }
}
