import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  public email: string = '';
  public username: string = '';
  public password: string = '';
  

  onSubmit(event: SubmitEvent){

    console.log("Submit event", event);
    console.log(this.email, this.username, this.password);
    

  }

}
