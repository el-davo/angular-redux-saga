import {ReleaseToggle} from '../release-toggles/release-toggles.state';

export const releaseToggleState: ReleaseToggleState = {
  isFetchingReleaseToggle: false,
  releaseToggle: null
};

export interface ReleaseToggleState {
  isFetchingReleaseToggle: boolean;
  releaseToggle: ReleaseToggle
}
