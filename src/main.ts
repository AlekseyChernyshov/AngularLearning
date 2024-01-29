import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {AppComponent} from './app/app.component';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(),
    provideAnimations(), 
    provideToastr(),],
});