import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { AppComponent } from './app.component';
import { DynamicComponentDemoComponent } from './components/dynamic-component-demo/dynamic-component-demo.component';
import { EmptyComponentComponent } from './components/empty-component/empty-component.component';

export const routes: Routes = [
    {
        path: 'tdform',
        component: TemplateDrivenFormComponent
    },
    {
        path: 'dynamic',
        component: DynamicComponentDemoComponent
    },
    { 
        path: "",
        component: EmptyComponentComponent
    },
    { path: '',   redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: EmptyComponentComponent   }
];
