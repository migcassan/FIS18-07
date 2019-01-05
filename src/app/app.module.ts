import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

// import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: 'main', component: MainMenuComponent//, canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }