import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStubComponent } from './content-stub.component';

describe('ContentStubComponent', () => {
  let component: ContentStubComponent;
  let fixture: ComponentFixture<ContentStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
