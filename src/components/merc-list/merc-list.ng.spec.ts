import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercListComponent } from './merc-list.ng';

describe(MercListComponent.name, () => {
  let component: MercListComponent;
  let fixture: ComponentFixture<MercListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MercListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
