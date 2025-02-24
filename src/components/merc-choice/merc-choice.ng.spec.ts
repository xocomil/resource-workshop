import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercListComponent } from '../merc-list/merc-list.ng';
import { MercChoiceComponent } from './merc-choice.component';

describe(MercChoiceComponent.name, () => {
  let component: MercChoiceComponent;
  let fixture: ComponentFixture<MercChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercChoiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MercChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
