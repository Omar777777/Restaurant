import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {


    httpClient = inject(MealsService);
                allMeals: any = [];
              
                getAllMeals() {
                  this.httpClient.getMealsCategories('Pasta').subscribe({
                    next: (res) => {
                      this.allMeals = res.meals; 
                    }
                  })
                }
              
                ngOnInit():void {
                  this.getAllMeals();
                }
  

}
