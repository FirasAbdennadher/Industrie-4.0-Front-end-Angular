import { Component, OnInit } from '@angular/core';
import {EditionsService} from '../../services/EditionsService/editions.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-secondedit',
  templateUrl: './secondedit.component.html',
  styleUrls: ['./secondedit.component.css']
})
export class SecondeditComponent implements OnInit {

  constructor(public http: HttpClient, public editionservice:EditionsService) {
  }
  edition=null;


  ngOnInit() {
    this.editionservice.getFirstEdition().subscribe(data => {
        this.edition = data;
        this.edition = Array.of(this.edition);
        const date =this.edition.date;
      }
      , err => {
        console.log(err);
        console.log("pff");
      })
  }

}
