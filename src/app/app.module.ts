import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//modules
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { TextMaskModule } from 'angular2-text-mask';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';

//components
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { CreateAnnouncementComponent } from './components/create-announcement/create-announcement.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';



const modules =[
  NgxPaginationModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatRadioModule,
  MatExpansionModule,
  TextMaskModule,
  MatCheckboxModule,
  CarouselModule,
  NgImageSliderModule
]
const components = [
  LogInComponent,
  RegistrationComponent,
  AnnouncementComponent,
  AnnouncementDetailComponent,
  CreateAnnouncementComponent,
  HomeComponent,
  NavComponent,
  FooterComponent,
  PersonalDataComponent,
  ForgotPasswordComponent
]

@NgModule({
  declarations: [
    AppComponent,    
    components, AnnouncementListComponent, TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
