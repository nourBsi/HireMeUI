import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRComponent } from './home-r.component';

describe('HomeRComponent', () => {
  let component: HomeRComponent;
  let fixture: ComponentFixture<HomeRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRComponent]
    });
    fixture = TestBed.createComponent(HomeRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
