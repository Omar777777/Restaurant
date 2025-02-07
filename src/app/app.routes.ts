import { Routes } from '@angular/router';
import { AllComponent } from './components/categories/all/all.component';
import { BeefComponent } from './components/categories/beef/beef.component';
import { BreakfastComponent } from './components/categories/breakfast/breakfast.component';
import { ChickenComponent } from './components/categories/chicken/chicken.component';
import { DessertComponent } from './components/categories/dessert/dessert.component';
import { GoatComponent } from './components/categories/goat/goat.component';
import { LambComponent } from './components/categories/lamb/lamb.component';
import { MiscellaneousComponent } from './components/categories/miscellaneous/miscellaneous.component';
import { PastaComponent } from './components/categories/pasta/pasta.component';
import { PorkComponent } from './components/categories/pork/pork.component';
import { SeafoodComponent } from './components/categories/seafood/seafood.component';
import { SideComponent } from './components/categories/side/side.component';
import { StarterComponent } from './components/categories/starter/starter.component';
import { VeganComponent } from './components/categories/vegan/vegan.component';
import { VegetarianComponent } from './components/categories/vegetarian/vegetarian.component';

export const routes: Routes = [
    {
        path: ' ', loadComponent: () =>  import('./components/categories/beef/beef.component').then((c)=>c.BeefComponent)
    },
    {
        path: 'category/Beef', loadComponent: () => import('./components/categories/all/all.component').then((c) => c.AllComponent)
        
    },
    {
        path: 'category/Breakfast', loadComponent: () => import('./components/categories/breakfast/breakfast.component').then((c) => c.BreakfastComponent) 
        
    },
    {
        path: 'category/Chicken', loadComponent: () => import('./components/categories/chicken/chicken.component').then((c) => c.ChickenComponent)
        
    },
    {
        path: 'category/Dessert', loadComponent: () => import('./components/categories/dessert/dessert.component').then((c) => c.DessertComponent)
        
    },
    {
        path: 'category/Goat', loadComponent: () => import('./components/categories/goat/goat.component').then((c) => c.GoatComponent) 
        
    },
    {
        path: 'category/Lamb', loadComponent: () => import('./components/categories/lamb/lamb.component').then((c) => c.LambComponent) 
        
    },
    {
        path: 'category/Miscellaneous', loadComponent: () => import('./components/categories/miscellaneous/miscellaneous.component').then((c) => c.MiscellaneousComponent) 
        
    },
    {
        path: 'category/Pasta', loadComponent: () => import('./components/categories/pasta/pasta.component').then((c) => c.PastaComponent) 
        
    },
    {
        path: 'category/Pork', loadComponent: () => import('./components/categories/pork/pork.component').then((c) => c.PorkComponent) 
        
    },
    {
        path: 'category/Seafood', loadComponent: () => import('./components/categories/seafood/seafood.component').then((c) => c.SeafoodComponent) 
        
    },
    {
        path: 'category/Side', loadComponent: () => import('./components/categories/side/side.component').then((c) => c.SideComponent) 
        
    },
    {
        path: 'category/Starter', loadComponent: () => import('./components/categories/starter/starter.component').then((c) => c.StarterComponent) 
        
    },
    {
        path: 'category/Vegan', loadComponent: () => import('./components/categories/vegan/vegan.component').then((c) => c.VeganComponent) 
        
    },
    {
        path: 'category/Vegetarian', loadComponent: () => import('./components/categories/vegetarian/vegetarian.component').then((c) => c.VegetarianComponent) 
        
    },
    {path:'**',  redirectTo:' ', pathMatch:'full'}
];
