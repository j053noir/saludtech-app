import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicItemComponent } from './medic-item.component';

describe('MedicItemComponent', () => {
  let component: MedicItemComponent;
  let fixture: ComponentFixture<MedicItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
