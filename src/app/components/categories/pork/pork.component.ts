import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-pork',
  imports: [],
  templateUrl: './pork.component.html',
  styleUrl: './pork.component.css'
})
export class PorkComponent {

    httpClient = inject(MealsService);
                  allMeals: any = [];
                
                  getAllMeals() {
                    this.httpClient.getMealsCategories('Pork').subscribe({
                      next: (res) => {
                        this.allMeals = res.meals; 
                      }
                    })
                  }
                
                  ngOnInit():void {
                    this.getAllMeals();
                  }

}
