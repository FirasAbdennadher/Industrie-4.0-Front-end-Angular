import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstteamComponent } from './firstteam.component';

describe('FirstteamComponent', () => {
  let component: FirstteamComponent;
  let fixture: ComponentFixture<FirstteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
