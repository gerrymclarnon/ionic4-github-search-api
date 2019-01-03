import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchPagePage } from './user-search-page.page';

describe('UserSearchPagePage', () => {
  let component: UserSearchPagePage;
  let fixture: ComponentFixture<UserSearchPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
