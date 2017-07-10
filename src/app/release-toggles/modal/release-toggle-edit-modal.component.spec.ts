import {async, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/testing';
import {ReleaseToggleEditModalComponent} from './release-toggle-edit-modal.component';
import {ReleaseTogglesActions} from '../release-toggles.actions';

describe('ReleaseToggleEditModal', () => {

  let store;
  let fixture;
  let component;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgReduxTestingModule],
      declarations: [
        ReleaseToggleEditModalComponent
      ],
      providers: [
        ReleaseTogglesActions
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseToggleEditModalComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    MockNgRedux.reset();
    store = MockNgRedux.getSelectorStub('releaseToggles');
  }));

  describe('layout', () => {

    it('should display a modal', () => {
      expect(compiled.querySelector('clr-modal')).toBeTruthy();
    });

    it('should have the correct modal header', () => {
      expect(compiled.querySelector('.modal-title').innerHTML).toBe('Edit Toggle');
    });

    it('should have a category select dropdown', () => {
      expect(compiled.querySelector('select#toggle-category')).toBeTruthy();
    });

    it('should have a name input', () => {
      expect(compiled.querySelector('input#toggle-name')).toBeTruthy();
    });

    it('should have a description textarea', () => {
      expect(compiled.querySelector('textarea#toggle-description')).toBeTruthy();
    });

    it('should have a toggle', () => {
      expect(compiled.querySelector('input#toggle-active')).toBeTruthy();
    });

    it('should have a modal footer with correct buttons', () => {
      expect(compiled.querySelector('.modal-footer')).toBeTruthy();
      expect(compiled.querySelectorAll('.modal-footer > button').length).toBe(2);
    });
  });

  describe('actions', () => {

    let hideEditToggleModalSpy;
    let editToggleCategoryChangeSpy;
    let editToggleNameChangeSpy;
    let editToggleDescriptionChangeSpy;
    let editToggleActiveChangeSpy;
    let requestToggleEditSpy;

    beforeEach(() => {
      const releaseTogglesActions = fixture.debugElement.injector.get(ReleaseTogglesActions);
      hideEditToggleModalSpy = spyOn(releaseTogglesActions, 'hideEditToggleModal');
      editToggleCategoryChangeSpy = spyOn(releaseTogglesActions, 'editToggleCategoryChange');
      editToggleNameChangeSpy = spyOn(releaseTogglesActions, 'editToggleNameChange');
      editToggleDescriptionChangeSpy = spyOn(releaseTogglesActions, 'editToggleDescriptionChange');
      editToggleActiveChangeSpy = spyOn(releaseTogglesActions, 'editToggleActiveChange');
      requestToggleEditSpy = spyOn(releaseTogglesActions, 'requestToggleEdit');
    });

    it('should hide edit toggle modal when called', () => {
      compiled.querySelectorAll('.modal-footer > button')[0].click();

      expect(hideEditToggleModalSpy).toHaveBeenCalled();
    });

    it('should update category when select is changed', () => {
      compiled.querySelector('select#toggle-category').value = 'Unity';
      compiled.querySelector('select#toggle-category').dispatchEvent(new Event('change'));

      expect(editToggleCategoryChangeSpy).toHaveBeenCalledWith('Unity');
    });

    it('should update name when text is input', () => {
      compiled.querySelector('input#toggle-name').value = 'test';
      compiled.querySelector('input#toggle-name').dispatchEvent(new Event('keyup'));

      expect(editToggleNameChangeSpy).toHaveBeenCalledWith('test');
    });

    it('should update description when text is input', () => {
      compiled.querySelector('textarea#toggle-description').value = 'test';
      compiled.querySelector('textarea#toggle-description').dispatchEvent(new Event('keyup'));

      expect(editToggleDescriptionChangeSpy).toHaveBeenCalledWith('test');
    });

    it('should toggle active on release toggle when clicked', () => {
      compiled.querySelector('input#toggle-active').dispatchEvent(new Event('click'));

      expect(editToggleActiveChangeSpy).toHaveBeenCalled();
    });

    it('should edit the toggle', () => {
      compiled.querySelectorAll('.modal-footer > button')[1].click();

      expect(requestToggleEditSpy).toHaveBeenCalled();
    });
  });
});
