import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { CreateAnnouncementComponent } from './components/create-announcement/create-announcement.component';
import { FavComponent } from './components/fav/fav.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'personal-data', component: PersonalDataComponent},
  { path: 'announcement', component: AnnouncementComponent},
  { path: 'create-announcement', component: CreateAnnouncementComponent},
  { path: 'announcement-detail/:announcementId', component: AnnouncementDetailComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
