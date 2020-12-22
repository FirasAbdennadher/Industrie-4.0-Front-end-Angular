import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondspeakerComponent } from './secondspeaker.component';

describe('SecondspeakerComponent', () => {
  let component: SecondspeakerComponent;
  let fixture: ComponentFixture<SecondspeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondspeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
