import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { LogInComponent } from '../app/components/log-in/log-in.component';
import { RegistrationComponent } from '../app/components/registration/registration.component';
import { AnnouncementComponent } from '../app/components/announcement/announcement.component';
import { AnnouncementDetailComponent } from '../app/components/announcement-detail/announcement-detail.component';
import { CreateAnnouncementComponent } from '../app/components/create-announcement/create-announcement.component';
import { HomeComponent } from '../app/components/home/home.component';
import { NavComponent } from '../app/components/nav/nav.component';
import { FavComponent } from '../app/components/fav/fav.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { PersonalDataComponent } from '../app/components/personal-data/personal-data.component';



//modules
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


const modules =[
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatRadioModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule

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
  FavComponent,
  PersonalDataComponent
]

@NgModule({
  declarations: [
    AppComponent,    
    components
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
