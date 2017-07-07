import { releaseToggles } from './titan-raw-data-management/release-toggles';
import { currentUser } from './titan-user-management/current-user'

export const db = {
    '/titan-raw-data-management': {
        releaseToggles
    },
    '/titan-user-management': {
        currentUser
    }
};
