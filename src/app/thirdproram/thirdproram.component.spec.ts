import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdproramComponent } from './thirdproram.component';

describe('ThirdproramComponent', () => {
  let component: ThirdproramComponent;
  let fixture: ComponentFixture<ThirdproramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdproramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdproramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
