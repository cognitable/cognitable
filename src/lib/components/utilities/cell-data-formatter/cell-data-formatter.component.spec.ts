import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDataFormatterComponent } from './cell-data-formatter.component';

describe('CellDataFormatterComponent', () => {
  let component: CellDataFormatterComponent;
  let fixture: ComponentFixture<CellDataFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellDataFormatterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellDataFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
