import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottrChapterComponent } from './plottr-chapter.component';

describe('PlottrChapterComponent', () => {
  let component: PlottrChapterComponent;
  let fixture: ComponentFixture<PlottrChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlottrChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlottrChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
