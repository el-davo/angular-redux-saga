import { ReleaseToggle } from '../../app/release-toggles/release-toggles.state';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Factory } from 'rosie';

Factory.define('release-toggle')
    .sequence('id')
    .attr('category', 'Dashboard')
    .attr('name', 'test')
    .attr('description', 'test description')
    .attr('active', true)
    .attr('created', () => new Date());

export class ReleaseTogglesStub implements InMemoryDbService {
    createDb() {
        let releaseToggles = Factory.buildList('release-toggle', 5);
        return {releaseToggles};
    }
}