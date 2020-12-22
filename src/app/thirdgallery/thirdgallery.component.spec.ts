import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdgalleryComponent } from './thirdgallery.component';

describe('ThirdgalleryComponent', () => {
  let component: ThirdgalleryComponent;
  let fixture: ComponentFixture<ThirdgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
