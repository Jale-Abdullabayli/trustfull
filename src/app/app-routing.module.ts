import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { CreateAnnouncementComponent } from './components/create-announcement/create-announcement.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'announcements/:categoryId', component: AnnouncementListComponent},
  { path: 'announcements', component: AnnouncementListComponent},
  { path: 'personal-data', component: PersonalDataComponent},
  { path: 'create-announcement', component: CreateAnnouncementComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'terms-conditions', component: TermsConditionsComponent},
  { path: 'announcement-detail/:announcementId', component: AnnouncementDetailComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
