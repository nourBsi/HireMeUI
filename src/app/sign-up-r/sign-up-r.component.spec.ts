import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpRComponent } from './sign-up-r.component';

describe('SignUpRComponent', () => {
  let component: SignUpRComponent;
  let fixture: ComponentFixture<SignUpRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpRComponent]
    });
    fixture = TestBed.createComponent(SignUpRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
