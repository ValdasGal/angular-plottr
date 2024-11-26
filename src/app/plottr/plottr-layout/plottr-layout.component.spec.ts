import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrLayoutComponent } from './plottr-layout.component';

describe('PlottrLayoutComponent', () => {
  let component: PlottrLayoutComponent;
  let fixture: ComponentFixture<PlottrLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlottrLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
