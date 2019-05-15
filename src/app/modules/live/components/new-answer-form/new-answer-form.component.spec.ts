import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnswerFormComponent } from './new-answer-form.component';

describe('NewAnswerFormComponent', () => {
  let component: NewAnswerFormComponent;
  let fixture: ComponentFixture<NewAnswerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnswerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
