import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorFormComponent } from './authenticator-form.component';

describe('AuthenticatorFormComponent', () => {
  let component: AuthenticatorFormComponent;
  let fixture: ComponentFixture<AuthenticatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
