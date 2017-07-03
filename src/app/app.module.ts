import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideStore, combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { rootReducer } from './root.reducer';
import { compose } from '@ngrx/core/compose';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ReleaseTogglesService } from './release-toggles/effects/release-toggles.service';
import { AppComponent } from './app.component';
import { ReleaseTogglesComponent } from './release-toggles/release-toggles.component';
import { ReleaseToggleEditModalComponent } from './release-toggles/modal/release-toggle-edit-modal.component';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { ClarityModule } from 'clarity-angular';
import { ReleaseTogglesEffects } from './release-toggles/effects/release-toggles.effects';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';

const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(rootReducer);
const productionReducer = combineReducers(rootReducer);

export function appReducer(state: any, action: any) {
  return environment.production ? productionReducer(state, action) : developmentReducer(state, action);
}

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
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(ReleaseTogglesEffects)
  ],
  providers: [
    provideStore(appReducer),
    ReleaseTogglesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
