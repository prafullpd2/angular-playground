import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentDemoComponent } from './dynamic-component-demo.component';

describe('DynamicComponentDemoComponent', () => {
  let component: DynamicComponentDemoComponent;
  let fixture: ComponentFixture<DynamicComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
