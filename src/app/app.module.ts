import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingCompents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { SecondeditComponent } from './secondedit/secondedit.component';
import {HttpClientModule} from '@angular/common/http';
import {FirsteditComponent} from './firstedit/firstedit.component';
import { ThirdspeakerComponent } from './thirdspeaker/thirdspeaker.component';
import { FirstspeakerComponent } from './firstspeaker/firstspeaker.component';
import { FirstprogrmmComponent } from './firstprogrmm/firstprogrmm.component';
import { SecondprogramComponent } from './secondprogram/secondprogram.component';
import { ThirdproramComponent } from './thirdproram/thirdproram.component';
import { FirstgalleryComponent } from './firstgallery/firstgallery.component';
import { SecondgalleryComponent } from './secondgallery/secondgallery.component';
import { ThirdgalleryComponent } from './thirdgallery/thirdgallery.component';
import { FirstteamComponent } from './firstteam/firstteam.component';
import { SecondteamComponent } from './secondteam/secondteam.component';
import { ThirdteamComponent } from './thirdteam/thirdteam.component';
import {EditionsService} from '../services/EditionsService/editions.service';
import {SpeakerServiceService} from '../services/SpeakerService/speaker-service.service';
import {TeamsService} from '../services/Teams/teams.service';
import {ProgramsService} from '../services/Programs/programs.service';
import {GallerysService} from '../services/Gallerys/gallerys.service';
import {SecondspeakerComponent} from './secondspeaker/secondspeaker.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HomeService} from '../services/Home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    SliderComponent,

    SecondeditComponent,
    FirsteditComponent,
    FirstspeakerComponent,
SecondspeakerComponent,
    ThirdspeakerComponent,

    FirstprogrmmComponent,
    SecondprogramComponent,
    ThirdproramComponent,

    FirstgalleryComponent,
    SecondgalleryComponent,
    ThirdgalleryComponent,

    FirstteamComponent,
    SecondteamComponent,
    ThirdteamComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EditionsService,SpeakerServiceService,TeamsService,ProgramsService,GallerysService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
