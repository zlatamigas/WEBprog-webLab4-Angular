import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCenterComponent } from './good-center.component';

describe('GoodCenterComponent', () => {
  let component: GoodCenterComponent;
  let fixture: ComponentFixture<GoodCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
