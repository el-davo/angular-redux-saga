import {ReleaseToggleActions} from './release-toggle.actions';
import {ReleaseToggle} from '../release-toggles/release-toggles.state';

describe('Release Toggle Actions', () => {

  let actions: ReleaseToggleActions;

  beforeEach(() => {
    actions = new ReleaseToggleActions();
  });

  it('should fetch a single release toggle', () => {
    const id = 'abc123';
    expect(actions.fetchReleaseToggle(id)).toEqual({type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE, id});
  });

  it('should add the fetch release toggle to the store', () => {
    const releaseToggle = {} as ReleaseToggle;
    expect(actions.fetchReleaseToggleSuccess(releaseToggle)).toEqual({
      type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_SUCCESS,
      releaseToggle
    })
  });

  it('should inform the user that the fetch failed', () => {
    expect(actions.fetchReleaseToggleFailed()).toEqual({type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_FAILED});
  });
});
