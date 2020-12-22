import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondprogramComponent } from './secondprogram.component';

describe('SecondprogramComponent', () => {
  let component: SecondprogramComponent;
  let fixture: ComponentFixture<SecondprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
