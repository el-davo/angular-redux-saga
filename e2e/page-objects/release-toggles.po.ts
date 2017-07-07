import { browser, by, element } from 'protractor';

class ReleaseTogglesPageObject {

    releaseTogglesList = element(by.id('release-toggles-list-table'));
    tableRows = element.all(by.className('datagrid-row-flex'));

    go() {
        return browser.get('/');
    }

    getTotalReleaseToggles() {
        return this.tableRows.count();
    }

}

export const releaseTogglesPage = new ReleaseTogglesPageObject();
