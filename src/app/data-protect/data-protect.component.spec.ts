import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtectComponent } from './data-protect.component';

describe('DataProtectComponent', () => {
  let component: DataProtectComponent;
  let fixture: ComponentFixture<DataProtectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProtectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
