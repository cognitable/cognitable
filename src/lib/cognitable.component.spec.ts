import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitableComponent } from './cognitable.component';

describe('CognitableComponent', () => {
  let component: CognitableComponent;
  let fixture: ComponentFixture<CognitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
