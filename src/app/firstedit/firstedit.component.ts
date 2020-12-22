import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EditionsService} from '../../services/EditionsService/editions.service';

@Component({
  selector: 'app-firstedit',
  templateUrl: './firstedit.component.html',
  styleUrls: ['./firstedit.component.css']
})
export class FirsteditComponent implements OnInit {
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
