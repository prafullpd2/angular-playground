import { NgComponentOutlet } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef, input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-loader',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './dynamic-component-loader.component.html',
  styleUrl: './dynamic-component-loader.component.css'
})
export class DynamicComponentLoaderComponent implements OnInit, AfterViewInit, AfterContentInit{
  componentToRender = input<any>();
  inputProperties = input<any>();

  @ViewChild('ref', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;
  dynamicComponentContainer!: ComponentRef<any> ;
  constructor(public viewContainerRef: ViewContainerRef){

  //   const componentRef = this.container.createComponent(this.componentToRender());

  //   // Access the component instance
  //   const componentInstance = componentRef.instance;

  //   // Set component inputs
    
  //   console.log('componentInstance', componentInstance);
    

  }
  ngAfterContentInit(): void {
    console.log('container', this.container);
    console.log('dynamicComponentContainer', this.dynamicComponentContainer);
  }
  ngAfterViewInit(): void {
    console.log('container', this.container);
    console.log('dynamicComponentContainer', this.dynamicComponentContainer);
  }
  ngOnInit(): void {
    console.log('container', this.container);
    console.log('dynamicComponentContainer', this.dynamicComponentContainer);
    // this.container.createComponent(componentFactory);
  }
  

}
