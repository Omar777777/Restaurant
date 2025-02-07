import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-miscellaneous',
  imports: [],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.css'
})
export class MiscellaneousComponent {

   httpClient = inject(MealsService);
              allMeals: any = [];
            
              getAllMeals() {
                this.httpClient.getMealsCategories('Miscellaneous').subscribe({
                  next: (res) => {
                    this.allMeals = res.meals; 
                  }
                })
              }
            
              ngOnInit():void {
                this.getAllMeals();
              }


  
}
