import { ReleaseToggle } from '../../app/release-toggles/release-toggles.state';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Factory } from 'rosie';

Factory.define('current-user')
    .sequence('id')
    .attr('username', 'jimmy');

export class CurrentUserStub implements InMemoryDbService {
    createDb() {
        let currentUser = Factory.build('current-user');
        return { currentUser };
    }
}