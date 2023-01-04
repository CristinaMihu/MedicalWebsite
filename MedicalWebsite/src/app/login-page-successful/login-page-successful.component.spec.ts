import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageSuccessfulComponent } from './login-page-successful.component';

describe('LoginPageSuccessfulComponent', () => {
  let component: LoginPageSuccessfulComponent;
  let fixture: ComponentFixture<LoginPageSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
