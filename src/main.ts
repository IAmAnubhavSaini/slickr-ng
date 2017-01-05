import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { HeaderModule } from './app/header/header.module';
import { HeaderActionsModule } from './app/header/actions/actions.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeaderModule);
platformBrowserDynamic().bootstrapModule(HeaderActionsModule);
