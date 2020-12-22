import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {EditionsService} from '../../services/EditionsService/editions.service';
import {HomeService} from '../../services/Home/home.service';
import { DomSanitizer } from '@angular/platform-browser';
//import { Pipe } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient, public homeservice:HomeService){//,private sanitizer: DomSanitizer) {
  }
  sponsors=null;
  mediapartenaires=null;
  organisateurs=null;
  partenaires=null;
  //bgImage:any;



  ngOnInit() {
    this.homeservice.organisateurthirdEdit().subscribe(data => {
        this.organisateurs = data;
        //this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url(assets/images/organisateur/' + data[1].photo);
      //console.log(this.bgImage);
        }
      , err => {
        console.log(err);
      })

    this.homeservice.PartenaireThirdEdit().subscribe(data => {
        this.partenaires = data;

      }
      , err => {
        console.log(err);})

    this.homeservice.SponsorthirdEdit().subscribe(data => {
        this.sponsors = data;
      }
      , err => {
        console.log(err);})

    this.homeservice.MediaPartenaireThirdEdit().subscribe(data => {
        this.mediapartenaires = data;
      }
      , err => {
        console.log(err);})
  }

}
