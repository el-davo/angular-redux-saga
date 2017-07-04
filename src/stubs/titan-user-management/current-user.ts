import { Factory } from 'rosie';

Factory.define('current-user')
    .sequence('id')
    .attr('username', 'johnDoe');

export const currentUser = Factory.build('current-user');