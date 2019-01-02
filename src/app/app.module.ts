import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login/main', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainMenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }