import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { combineReducers, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { rootReducer } from './root.reducer';
import { compose } from '@ngrx/core/compose';
import { TodoService } from './todo/effects/todo.service';
import { ReleaseTogglesService } from './release-toggles/effects/release-toggles.service';
import { AppComponent } from './app.component';
import { ReleaseTogglesComponent } from './release-toggles/release-toggles.component';
import { ReleaseToggleEditModalComponent } from './release-toggles/modal/release-toggle-edit-modal.component';
import { store } from './store/store';
import { TodoEffects } from './todo/effects/todo.effects';
import { ClarityModule } from "clarity-angular";
import { ReleaseTogglesEffects } from './release-toggles/effects/release-toggles.effects';

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
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    StoreModule.provideStore(compose(...store.store)(rootReducer)),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(TodoEffects),
    EffectsModule.run(ReleaseTogglesEffects)
  ],
  providers: [
    TodoService,
    ReleaseTogglesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
