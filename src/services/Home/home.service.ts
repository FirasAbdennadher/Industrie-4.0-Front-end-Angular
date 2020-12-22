import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public host: string = "http://localhost:8089/";

  constructor(public http: HttpClient) {
  }

  organisateurFirstEdit() {
    return this.http.get(this.host+"organisateur?mc=1");
  }
  organisateurSecondEdit() {
    return this.http.get(this.host+"organisateur?mc=2");
  }
  organisateurthirdEdit() {
    return this.http.get(this.host+"organisateur");
  }


  SponsorFirstEdit() {
    return this.http.get(this.host+"spnosor?mc=1");
  }
  SponsorSecondEdit() {
    return this.http.get(this.host+"spnosor?mc=2");
  }
  SponsorthirdEdit() {
    return this.http.get(this.host+"spnosor");
  }


  MediaPartenaireFirstEdit() {
    return this.http.get(this.host+"mediapartenaire?mc=1");
  }
  MediaPartenaireSecondEdit() {
    return this.http.get(this.host+"mediapartenaire?mc=2");
  }
  MediaPartenaireThirdEdit() {
    return this.http.get(this.host+"mediapartenaire");
  }

  PartenaireFirstEdit() {
    return this.http.get(this.host+"partenaire?mc=1");
  }
  PartenaireSecondEdit() {
    return this.http.get(this.host+"partenaire?mc=2");
  }
  PartenaireThirdEdit() {
    return this.http.get(this.host+"partenaire");
  }



}
