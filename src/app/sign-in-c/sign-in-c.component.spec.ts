import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInCComponent } from './sign-in-c.component';

describe('SignInCComponent', () => {
  let component: SignInCComponent;
  let fixture: ComponentFixture<SignInCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInCComponent]
    });
    fixture = TestBed.createComponent(SignInCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
