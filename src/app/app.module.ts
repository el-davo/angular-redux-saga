import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { combineReducers, StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { rootReducer } from './root.reducer';
import { compose } from '@ngrx/core/compose';
import { TodoService } from './todo/effects/todo.service';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { store } from './store/store';
import { TodoEffects } from './todo/effects/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(compose(...store.store)(rootReducer)),
    EffectsModule.run(TodoEffects)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
