import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleconsultationsComponent } from './teleconsultations.component';

describe('TeleconsultationsComponent', () => {
  let component: TeleconsultationsComponent;
  let fixture: ComponentFixture<TeleconsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeleconsultationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleconsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
