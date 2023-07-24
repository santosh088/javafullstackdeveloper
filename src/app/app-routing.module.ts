import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CanActivateGuard } from './auth/auth.Guard';
import { AuthService } from './auth/auth.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { WeightlossComponent } from './java/java.component';

const routes: Routes = [];

const childRoutes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [CanActivateGuard], canActivateChild: [CanActivateGuard],
    // {
    //   path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
       { path: 'dashboard', component: DashboardComponent },
       { path: 'about', component: AboutComponent },
       { path: 'contact', component: ContactComponent },
       { path: 'blogs', component: BlogsComponent },
       { path: 'java', component: WeightlossComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(childRoutes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, AuthService]
})

export class AppRoutingModule { }
