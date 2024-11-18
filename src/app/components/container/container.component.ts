import { Component } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UserComponent } from '../user/user.component';
import { DynamicRenderListComponent } from '../dynamic-render-list/dynamic-render-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  /**
   * This list is used used to provide @Input propery in dynamically rendered components
   * Here, UserComponent need user property as an input and we re passign it in where its getting rendered dynamically
   */
  list: { user: IUser }[] = [
    {
      user: {
          name: 'neo',
          age: 31,
          gender: 'male',
          imageUrl: ''
        }
    }, 
    {
      user: {
        name: 'neo2',
        age: 32,
        gender: 'male',
        imageUrl: ''
      }
    }
  ]
  
  // component for Dynamic rendering. It will be passed to child component to render inside of it. 
  componentTorender = UserComponent;

}
