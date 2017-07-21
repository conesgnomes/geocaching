import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCacheListComponent } from './user-cache-list.component';

describe('UserCacheListComponent', () => {
  let component: UserCacheListComponent;
  let fixture: ComponentFixture<UserCacheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCacheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCacheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
