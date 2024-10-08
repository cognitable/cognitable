import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitableHeaderCellComponent } from './cognitable-header-cell.component';

describe('CognitableHeaderCellComponent', () => {
  let component: CognitableHeaderCellComponent;
  let fixture: ComponentFixture<CognitableHeaderCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitableHeaderCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitableHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
