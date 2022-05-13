import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectComponent } from './data-protect/data-protect.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SkillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactMeComponent,
    ImprintComponent,

    DataProtectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
