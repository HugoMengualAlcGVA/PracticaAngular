import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCardCompoent } from './articulo-card-compoent';

describe('ArticuloCardCompoent', () => {
  let component: ArticuloCardCompoent;
  let fixture: ComponentFixture<ArticuloCardCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloCardCompoent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloCardCompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
