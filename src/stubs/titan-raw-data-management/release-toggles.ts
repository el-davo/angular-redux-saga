import { ReleaseToggle } from '../../app/release-toggles/release-toggles.state';
import { name, random, lorem } from 'faker';
import { Factory } from 'rosie';

Factory.define('release-toggle')
    .sequence('id')
    .attr('category', 'Dashboard')
    .attr('name', 'test')
    .attr('description', 'test description')
    .attr('active', true)
    .attr('created', () => new Date());

export const releaseToggles = Factory.buildList('release-toggle', 10) as ReleaseToggle[];
