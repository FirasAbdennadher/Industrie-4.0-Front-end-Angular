import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpeakerServiceService} from '../../services/SpeakerService/speaker-service.service';

@Component({
  selector: 'app-secondspeaker',
  templateUrl: './secondspeaker.component.html',
  styleUrls: ['./secondspeaker.component.css']
})
export class SecondspeakerComponent implements OnInit {

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
