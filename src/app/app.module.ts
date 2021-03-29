import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CourselistComponent } from './courselist/courselist.component';
import { StudentsComponent } from './students/students.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  { path: 'first-component', component: HomepageComponent },
  { path: 'second-component', component: CourselistComponent },
  { path: 'third-component', component: StudentsComponent },
  { path: 'login-component', component: LoginpageComponent },
];



@NgModule({
  
  declarations: [
    AppComponent,
    HomepageComponent,
    CourselistComponent,
    StudentsComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
