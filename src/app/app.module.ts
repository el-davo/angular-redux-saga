import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer, AppState} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {ReleaseTogglesService} from './release-toggles/effects/release-toggles.service';
import {AppComponent} from './app.component';
import {ReleaseTogglesComponent} from './release-toggles/release-toggles.component';
import {ReleaseToggleEditModalComponent} from './release-toggles/modal/release-toggle-edit-modal.component';
import {ClarityModule} from 'clarity-angular';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseTogglesComponent,
    ReleaseToggleEditModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    NgReduxModule
  ],
  providers: [
    ReleaseTogglesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [createLogger()]);
  }
}
