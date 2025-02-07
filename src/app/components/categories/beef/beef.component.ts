import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-beef',
  imports: [],
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.css'
})
export class BeefComponent {

  httpClient = inject(MealsService);
  allMeals: any = [];

  getAllMeals() {
    this.httpClient.getMealsCategories('Beef').subscribe({
      next: (res) => {
        this.allMeals = res.meals; 
      }
    })
  }

  ngOnInit():void {
    this.getAllMeals();
  }

}