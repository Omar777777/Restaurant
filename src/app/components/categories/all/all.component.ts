import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

  httpClient = inject(HttpClient);
  allMeals:any = []
  
  getAllMeals() {
    this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').subscribe({
      next: (res: any) => {
        this.allMeals = res.meals;
        
      }
    })
    
  }

  ngOnInit() {
    this.getAllMeals();
  }

}