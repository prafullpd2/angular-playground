import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControlName, FormsModule, NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-builder',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './template-form-builder.component.html',
  styleUrl: './template-form-builder.component.css'
})
export class TemplateFormBuilderComponent {
  public email: string = '';
  public username: string = '';
  public password: string = '';

  
  

  onSubmit(form: NgForm, event: SubmitEvent){

    console.log("Submit event", event, form);
    console.log(this.email, this.username, this.password);
    console.log('isValid', form.form.valid, form.form.getRawValue());
    

    

  }

}
