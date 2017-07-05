export const releaseToggleState = {
    isFetchingReleaseToggles: false,
    releaseToggles: [],
    showEditToggleModal: false,
    editReleaseToggle: null
} as ReleaseToggleState;

export interface ReleaseToggleState {
    isFetchingReleaseToggles: boolean;
    releaseToggles: ReleaseToggle[];
    showEditToggleModal: boolean;
    editReleaseToggle: ReleaseToggle;
}

export interface ReleaseToggle {
    id: string;
    category: string;
    name: string;
    description: string;
    active: boolean;
    created: string;
}
