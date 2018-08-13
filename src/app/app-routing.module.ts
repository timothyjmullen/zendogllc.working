import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { ProjectsPageComponent } from './ui/projects-page/projects-page.component';
import { ContactPageComponent } from './ui/contact-page/contact-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: {title: 'Home'}, pathMatch: 'full' },
  { path: 'about', component: HomePageComponent, data: {title: 'About Me'} },
  { path: 'login', component: UserLoginComponent, data: {title: 'Login'} },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard], data: {title: 'Notes'} },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard], data: {title: 'Uploads'} },
  { path: 'contact',  component: ContactPageComponent, data: {title: 'Contact'} },
  { path: 'thoughts',  component: HomePageComponent, data: {title: 'Thoughts'} },
  { path: 'projects',  component: ProjectsPageComponent, data: {title: 'Projects'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
