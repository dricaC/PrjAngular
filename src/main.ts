import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserModule } from './app/user/user.module';

platformBrowser().bootstrapModule(UserModule)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
