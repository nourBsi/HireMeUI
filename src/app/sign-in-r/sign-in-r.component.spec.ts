import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRComponent } from './sign-in-r.component';

describe('SignInRComponent', () => {
  let component: SignInRComponent;
  let fixture: ComponentFixture<SignInRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInRComponent]
    });
    fixture = TestBed.createComponent(SignInRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
