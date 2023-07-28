import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { WeightlossComponent } from './java/java.component';
import { DietDetailsComponent } from './topic-details/topic-details.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { MatExpansionModule } from '@angular/material';
import { NgImageSliderModule } from 'ng-image-slider';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LayoutComponent,
    AboutComponent,
    ContactComponent,
    BlogsComponent,
    WeightlossComponent,
    DietDetailsComponent,
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
