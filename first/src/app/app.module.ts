import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LawyerSignupComponent } from './signup/lawyer-signup/lawyer-signup.component';
import { ClientSignupComponent } from './signup/client-signup/client-signup.component';
import {FormsModule} from '@angular/forms';
import { DocumentComponent } from './document/document.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import {RatingService} from 'src/app/services/rating.service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LawyerSignupComponent,
    ClientSignupComponent,
    DocumentComponent,
    RatingFormComponent,
    NotificationComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
