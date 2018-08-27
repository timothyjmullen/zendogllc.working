import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
/*import { ContactPageComponent } from './ui/contact-page/contact-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';*/
import { PrivacyPolicyPageComponent } from './ui/privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: {title: 'Home'}, pathMatch: 'full' },
  { path: 'privacy-policy',  component: PrivacyPolicyPageComponent, data: {title: 'Privacy Policy'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
