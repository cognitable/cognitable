import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitablePaginationComponent } from './cognitable-pagination.component';

describe('CognitablePaginationComponent', () => {
  let component: CognitablePaginationComponent;
  let fixture: ComponentFixture<CognitablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitablePaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
