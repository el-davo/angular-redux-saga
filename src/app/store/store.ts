import { environment } from '../../environments/environment';

export const store = environment.production ? require('./store.prod'): require('./store.dev');