import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercCardComponentNg } from './merc-card.ng';

describe('MercCardComponentNg', () => {
  let component: MercCardComponentNg;
  let fixture: ComponentFixture<MercCardComponentNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercCardComponentNg],
    }).compileComponents();

    fixture = TestBed.createComponent(MercCardComponentNg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
