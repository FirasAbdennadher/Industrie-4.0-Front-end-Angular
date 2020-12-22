import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdspeakerComponent } from './thirdspeaker.component';

describe('ThirdspeakerComponent', () => {
  let component: ThirdspeakerComponent;
  let fixture: ComponentFixture<ThirdspeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdspeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
