import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercDetailsNg } from './merc-details.ng';

describe('MercDetailsNg', () => {
  let component: MercDetailsNg;
  let fixture: ComponentFixture<MercDetailsNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercDetailsNg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercDetailsNg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
