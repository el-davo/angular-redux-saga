import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReleaseTogglesStub } from './release-toggles/release-toggles.stub';
import { CurrentUserStub } from './current-user/current-user.stub';

@NgModule({
    imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(ReleaseTogglesStub, { apiBase: 'titan-raw-data-management', delay: 200 }),
        InMemoryWebApiModule.forRoot(CurrentUserStub, { apiBase: 'titan-user-data', delay: 200 })
    ],
})
export class StubModule { }