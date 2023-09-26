import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the registration component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with initial invalid state', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('should require First Name', () => {
    const firstName = component.registrationForm.controls['firstName'];
    firstName.setValue('');
    expect(firstName.valid).toBeFalsy();
  });

  it('should require Last Name', () => {
    const lastName = component.registrationForm.controls['lastName'];
    lastName.setValue('');
    expect(lastName.valid).toBeFalsy();
  });

  it('should require a valid Email', () => {
    const email = component.registrationForm.controls['email'];
    email.setValue('invalid-email');
    expect(email.valid).toBeFalsy();
  });
});
