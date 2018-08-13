import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AuthenticatorModule } from './app/authenticator/authenticator.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AuthenticatorModule)
  .catch(err => console.log(err));
