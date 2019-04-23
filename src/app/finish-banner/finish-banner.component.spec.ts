import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishBannerComponent } from './finish-banner.component';

describe('FinishBannerComponent', () => {
  let component: FinishBannerComponent;
  let fixture: ComponentFixture<FinishBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
