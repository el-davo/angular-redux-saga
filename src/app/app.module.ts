import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {environment} from '../environments/environment';
import {ReleaseTogglesService} from './release-toggles/epics/release-toggles.service';
import {AppComponent} from './app.component';
import {ReleaseTogglesComponent} from './release-toggles/release-toggles.component';
import {ReleaseToggleEditModalComponent} from './release-toggles/modal/release-toggle-edit-modal.component';
import {ClarityModule} from 'clarity-angular';
import {ReleaseTogglesActions} from './release-toggles/release-toggles.actions';
import {ReleaseTogglesEpics} from './release-toggles/epics/release-toggles.epic';

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
    ReleaseTogglesService,
    ReleaseTogglesActions,
    ReleaseTogglesEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>, private releaseTogglesEpics: ReleaseTogglesEpics) {

    const epics = combineEpics(
      this.releaseTogglesEpics.fetchReleaseToggles,
      this.releaseTogglesEpics.editReleaseToggle
    );

    const middleware = [
      createEpicMiddleware(epics),
      createLogger()
    ];

    ngRedux.configureStore(rootReducer, {}, middleware);
  }

}
