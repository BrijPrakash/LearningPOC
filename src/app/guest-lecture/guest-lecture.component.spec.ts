import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLectureComponent } from './guest-lecture.component';

describe('GuestLectureComponent', () => {
  let component: GuestLectureComponent;
  let fixture: ComponentFixture<GuestLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
