import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondteamComponent } from './secondteam.component';

describe('SecondteamComponent', () => {
  let component: SecondteamComponent;
  let fixture: ComponentFixture<SecondteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
