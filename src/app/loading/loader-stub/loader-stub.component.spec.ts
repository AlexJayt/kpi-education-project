import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderStubComponent } from './loader-stub.component';

describe('LoaderStubComponent', () => {
  let component: LoaderStubComponent;
  let fixture: ComponentFixture<LoaderStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
