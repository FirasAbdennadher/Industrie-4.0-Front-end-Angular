import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstspeakerComponent } from './firstspeaker.component';

describe('FirstspeakerComponent', () => {
  let component: FirstspeakerComponent;
  let fixture: ComponentFixture<FirstspeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstspeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
