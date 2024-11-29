import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormBuilderComponent } from './template-form-builder.component';

describe('TemplateFormBuilderComponent', () => {
  let component: TemplateFormBuilderComponent;
  let fixture: ComponentFixture<TemplateFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
