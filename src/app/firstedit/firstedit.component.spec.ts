import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsteditComponent } from './firstedit.component';

describe('FirsteditComponent', () => {
  let component: FirsteditComponent;
  let fixture: ComponentFixture<FirsteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
