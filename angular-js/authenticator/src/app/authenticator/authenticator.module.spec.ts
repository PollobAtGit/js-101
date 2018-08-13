import { AuthenticatorModule } from './authenticator.module';

describe('AuthenticatorModule', () => {
  let authenticatorModule: AuthenticatorModule;

  beforeEach(() => {
    authenticatorModule = new AuthenticatorModule();
  });

  it('should create an instance', () => {
    expect(authenticatorModule).toBeTruthy();
  });
});
