import { Component, input } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user = input<IUser>();
  

}
