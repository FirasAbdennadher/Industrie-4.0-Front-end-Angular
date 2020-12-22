import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeditComponent } from './secondedit.component';

describe('SecondeditComponent', () => {
  let component: SecondeditComponent;
  let fixture: ComponentFixture<SecondeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
