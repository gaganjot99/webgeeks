import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Base Url for API Services

  baseUrl: string = "http://localhost:5279";

  readonly APIUrl = this.baseUrl + "/api";
  constructor(private http: HttpClient) { }

  //User Registration
  Insertuser(val: any) {
    return this.http.post(this.APIUrl + '/insertuser', val);
  }

  //User Login
  Getloggeduser(val: any, val2: any) {
    return this.http.get(this.APIUrl + '/Getuser/' + val + '/' + val2);
  }

  getFoodItems() {
    return this.http.get(this.APIUrl + '/GetFoodItems');
  }

  addFoodItem(val: any) {
    return this.http.post(this.APIUrl + '/addFoodItem', val);
  }

  GetfooditemsRes(val: any) {
    return this.http.get(this.APIUrl + '/GetfooditemsRes/' + val);
  }


}
