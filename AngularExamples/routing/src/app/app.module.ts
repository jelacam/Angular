import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ProtectedComponent } from './protected/protected.component';

import { AuthService } from './services/auth.service';

import { LoggedInGuard } from './logged-in.guard'

const ChildRoutes = [
   {path: "child1", component: Child1Component},
   {path: "child2", component: Child2Component}
  ]

const Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent, children: ChildRoutes}, // childRoutes - definisemo da nasa home componenta ima decu
  {path: "protected", component: ProtectedComponent, canActivate: [LoggedInGuard]}, // ProtectedCommponent, canActivate - prosledjujemo klasu koja se ponasa kao service
  {path: "about/:Id", component: AboutComponent},
  {path: "other", redirectTo:"home"}, // redirekcija
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Child1Component,
    Child2Component,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes) // za definisane rute na liniji 23, definisemo RouterModule - konfigurisemo rutiranje
    // potrebno je specificirati i na kojem mestu se vrsi rutiranje (neki meni ili nesto slicno sto ce konstantno postojati)
    // app.component.html
  ],
  providers: [AuthService, LoggedInGuard],//!LoggedInGuard also has to be included in providers!
  bootstrap: [AppComponent]
})
export class AppModule { }
