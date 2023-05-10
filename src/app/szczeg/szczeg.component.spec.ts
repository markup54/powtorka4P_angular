import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegComponent } from './szczeg.component';

describe('SzczegComponent', () => {
  let component: SzczegComponent;
  let fixture: ComponentFixture<SzczegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzczegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzczegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
