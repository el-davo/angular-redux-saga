import { releaseTogglesPage } from '../page-objects/release-toggles.po';

describe('Release Toggles page', () => {

    beforeEach(async () => await releaseTogglesPage.go());

    it('should display a list of release toggles', async () => {
        expect(releaseTogglesPage.releaseTogglesList.isDisplayed()).toBe(true);
    });

    it('should have the correct amount of release toggles', async () => {
        const count = await releaseTogglesPage.getTotalReleaseToggles();
        expect(count).toBe(11);
    });

});
