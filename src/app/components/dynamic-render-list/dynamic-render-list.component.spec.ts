import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRenderListComponent } from './dynamic-render-list.component';

describe('DynamicRenderListComponent', () => {
  let component: DynamicRenderListComponent;
  let fixture: ComponentFixture<DynamicRenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRenderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
