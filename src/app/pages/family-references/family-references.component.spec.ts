import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyReferencesComponent } from './family-references.component';

describe('FamilyReferencesComponent', () => {
  let component: FamilyReferencesComponent;
  let fixture: ComponentFixture<FamilyReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
