import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgalleryComponent } from './firstgallery.component';

describe('FirstgalleryComponent', () => {
  let component: FirstgalleryComponent;
  let fixture: ComponentFixture<FirstgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
