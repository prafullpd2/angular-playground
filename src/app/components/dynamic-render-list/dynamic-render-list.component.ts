import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { DynamicComponentLoaderComponent } from "../dynamic-component-loader/dynamic-component-loader.component";


@Component({
  selector: 'app-dynamic-render-list',
  standalone: true,
  imports: [DynamicComponentLoaderComponent],
  templateUrl: './dynamic-render-list.component.html',
  styleUrl: './dynamic-render-list.component.css'
})
export class DynamicRenderListComponent {
  list = input<any[]>();
  componentToRender = input<any>();


  constructor(){

  }
  ngAfterViewInit(): void {
    console.log(this.componentToRender());
  }

}
