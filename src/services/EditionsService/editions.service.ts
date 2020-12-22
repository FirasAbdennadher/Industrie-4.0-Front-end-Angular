import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditionsService {
  public host:string="http://localhost:8089/";
  constructor(public http:HttpClient){
  }

  getFirstEdition() {
    return this.http.get(this.host+"editions/1");
  }

  getSecondEdition() {
    return this.http.get(this.host+"editions/2");
  }

  getResource(url){
    return  this.http.get(url);
  }
  putRessource(url){
    return null;
  }
  getAll(){
    return this.http.get(this.host+"/editions");
  }
}
