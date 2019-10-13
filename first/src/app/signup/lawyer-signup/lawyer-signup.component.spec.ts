import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerSignupComponent } from './lawyer-signup.component';

describe('LawyerSignupComponent', () => {
  let component: LawyerSignupComponent;
  let fixture: ComponentFixture<LawyerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
