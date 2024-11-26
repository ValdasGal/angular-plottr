import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrChaptersComponent } from './plottr-chapters.component';

describe('PlottrChaptersComponent', () => {
  let component: PlottrChaptersComponent;
  let fixture: ComponentFixture<PlottrChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrChaptersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlottrChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
