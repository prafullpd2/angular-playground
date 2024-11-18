import { Component } from '@angular/core';
import { DynamicRenderListComponent } from "../dynamic-render-list/dynamic-render-list.component";
import { UserComponent } from '../user/user.component';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-dynamic-component-demo',
  standalone: true,
  imports: [DynamicRenderListComponent],
  templateUrl: './dynamic-component-demo.component.html',
  styleUrl: './dynamic-component-demo.component.css'
})
export class DynamicComponentDemoComponent {
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
