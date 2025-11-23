import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardAdminComponent } from './guard-admin-component';

describe('GuardAdminComponent', () => {
  let component: GuardAdminComponent;
  let fixture: ComponentFixture<GuardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
