import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDetailsPageComponent } from './subject-details-page.component';

describe('SubjectDetailsPageComponent', () => {
  let component: SubjectDetailsPageComponent;
  let fixture: ComponentFixture<SubjectDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
