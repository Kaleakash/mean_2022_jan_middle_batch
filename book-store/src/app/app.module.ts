import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

// Step 1: Define Routes/Paths

const routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
]

// Step 2: Make Module aware(import) of these paths

@NgModule({
  // Components in this module.
  declarations: [
    AppComponent
  ],
  // Imports modules it depends on
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    // Make module aware of routing paths.
    RouterModule.forRoot(routes),
    HomeModule
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
