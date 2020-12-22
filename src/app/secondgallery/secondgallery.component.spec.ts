import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgalleryComponent } from './secondgallery.component';

describe('SecondgalleryComponent', () => {
  let component: SecondgalleryComponent;
  let fixture: ComponentFixture<SecondgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
