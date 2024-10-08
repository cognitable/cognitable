import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitableDataCellComponent } from './cognitable-data-cell.component';

describe('CognitableDataCellComponent', () => {
  let component: CognitableDataCellComponent;
  let fixture: ComponentFixture<CognitableDataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitableDataCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitableDataCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
