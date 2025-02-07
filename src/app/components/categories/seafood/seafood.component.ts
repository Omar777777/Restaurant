import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-seafood',
  imports: [],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.css'
})
export class SeafoodComponent {

   httpClient = inject(MealsService);
                    allMeals: any = [];
                  
                    getAllMeals() {
                      this.httpClient.getMealsCategories('Seafood').subscribe({
                        next: (res) => {
                          this.allMeals = res.meals; 
                        }
                      })
                    }
                  
                    ngOnInit():void {
                      this.getAllMeals();
                    }

}
