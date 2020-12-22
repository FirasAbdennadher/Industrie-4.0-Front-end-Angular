import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpeakerServiceService} from '../../services/SpeakerService/speaker-service.service';

@Component({
  selector: 'app-thirdspeaker',
  templateUrl: './thirdspeaker.component.html',
  styleUrls: ['./thirdspeaker.component.css']
})
export class ThirdspeakerComponent implements OnInit {
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
