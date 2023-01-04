import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageSuccessfulComponent } from './register-page-successful.component';

describe('RegisterPageSuccessfulComponent', () => {
  let component: RegisterPageSuccessfulComponent;
  let fixture: ComponentFixture<RegisterPageSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
