import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/main/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  console.log("Enviroment: PRODUCTION");
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
