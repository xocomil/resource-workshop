import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercChoiceNg } from './merc-choice.component';

describe('MercChoiceNg', () => {
  let component: MercChoiceNg;
  let fixture: ComponentFixture<MercChoiceNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercChoiceNg],
    }).compileComponents();

    fixture = TestBed.createComponent(MercChoiceNg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
