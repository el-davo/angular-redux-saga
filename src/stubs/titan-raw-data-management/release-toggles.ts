import { ReleaseToggle } from '../../app/release-toggles/release-toggles.state';
import { name, random, lorem } from 'faker';
import { Factory } from 'rosie';

Factory.define('release-toggle')
    .sequence('id')
    .attr('category', 'Dashboard')
    .attr('name', () => name.findName())
    .attr('description', () => lorem.paragraph())
    .attr('active', true)
    .attr('created', () => new Date());

export const releaseToggles = Factory.buildList('release-toggle', 10) as ReleaseToggle[];
