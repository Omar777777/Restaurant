import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  httpClient = inject(HttpClient);

  getMealsCategories(cat:any):Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  }
}
