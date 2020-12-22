import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ContactComponent} from './contact/contact.component';
import {SliderComponent} from './slider/slider.component';
import {FirsteditComponent} from './firstedit/firstedit.component';
import {SecondeditComponent} from './secondedit/secondedit.component';
import {FirstteamComponent} from './firstteam/firstteam.component';
import {SecondteamComponent} from './secondteam/secondteam.component';
import {ThirdteamComponent} from './thirdteam/thirdteam.component';
import {FirstgalleryComponent} from './firstgallery/firstgallery.component';
import {SecondgalleryComponent} from './secondgallery/secondgallery.component';
import {ThirdgalleryComponent} from './thirdgallery/thirdgallery.component';
import {FirstspeakerComponent} from './firstspeaker/firstspeaker.component';
import {SecondspeakerComponent} from './secondspeaker/secondspeaker.component';
import {ThirdspeakerComponent} from './thirdspeaker/thirdspeaker.component';
import {FirstprogrmmComponent} from './firstprogrmm/firstprogrmm.component';
import {SecondprogramComponent} from './secondprogram/secondprogram.component';
import {ThirdproramComponent} from './thirdproram/thirdproram.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'firstedit',component:FirsteditComponent},
  {path:'secondedit',component:SecondeditComponent},
  {path:'s',component:SliderComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'team_firstedition',component:FirstteamComponent},
  {path:'team_secondedition',component:SecondteamComponent},
  {path:'team_thirdedition',component:ThirdteamComponent},
  {path:'gallery_firstedition',component:FirstgalleryComponent},
  {path:'gallery_secondedition',component:SecondgalleryComponent},
  {path:'gallery_thirdedition',component:ThirdgalleryComponent},
  {path:'speaker_firstedition',component:FirstspeakerComponent},
  {path:'speaker_secondedition',component:SecondspeakerComponent},
  {path:'speaker_thirdedition',component:ThirdspeakerComponent},
  {path:'program_firstedition',component:FirstprogrmmComponent},
  {path:'program_secondedition',component:SecondprogramComponent},
  {path:'program_thirdedition',component:ThirdproramComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompents=[FirstspeakerComponent,SecondspeakerComponent,ThirdspeakerComponent,FirstteamComponent,SecondteamComponent,ThirdteamComponent
  ,FirsteditComponent,SecondeditComponent,HomeComponent,SliderComponent,RegisterComponent,ContactComponent
  ,FirstgalleryComponent,SecondgalleryComponent,ThirdgalleryComponent,
  FirstprogrmmComponent,SecondprogramComponent,ThirdproramComponent
];
