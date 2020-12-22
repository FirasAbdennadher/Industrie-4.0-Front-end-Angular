import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstprogrmmComponent } from './firstprogrmm.component';

describe('FirstprogrmmComponent', () => {
  let component: FirstprogrmmComponent;
  let fixture: ComponentFixture<FirstprogrmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstprogrmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstprogrmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
