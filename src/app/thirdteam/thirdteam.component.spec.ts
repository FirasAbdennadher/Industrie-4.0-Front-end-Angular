import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdteamComponent } from './thirdteam.component';

describe('ThirdteamComponent', () => {
  let component: ThirdteamComponent;
  let fixture: ComponentFixture<ThirdteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
