import { Component, OnInit } from '@angular/core';
import {SpeakerServiceService} from '../../services/SpeakerService/speaker-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-firstspeaker',
  templateUrl: './firstspeaker.component.html',
  styleUrls: ['./firstspeaker.component.css']
})
export class FirstspeakerComponent implements OnInit {

  constructor(public http: HttpClient, public speakerService: SpeakerServiceService) {
  }

  speaker=null;
  ngOnInit() {
    this.speakerService.getSpeakerFirstEdit(3).subscribe(data => {
        this.speaker = data;
        //this.speaker = Array.of(this.speaker);
        console.log(data);
      }
      , err => {
        console.log(err);
        console.log("pff");
      })
  }


}
