import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiBaseUrl: string;
  options: any;



  constructor(public http: Http, public requestOptions: RequestOptions) {
    this.apiBaseUrl = 'api/';
    this.options = new RequestOptions();
    this.options.headers = new Headers();
    this.options.headers.append('Content-Type', 'application/json');
  }

  getOrdersByPizzeria(name: string) {
          return this.http.get(this.apiBaseUrl + 'getOrdersByPizzeria' + name)
          .map(res => res.json());
   }


   getMenuByPizzeria(name: string) {
           return this.http.get(this.apiBaseUrl + 'getMenupizzeriaByPizzeria' + name)
           .map(res => res.json());
    }


    getPizzeriaById(id: string) {
            return this.http.get(this.apiBaseUrl + 'getPizzeriaById' + id)
            .map(res => res.json());
     }

     getPizzeriaByName(name: string) {
             return this.http.get(this.apiBaseUrl + 'getPizzeriaByName' + name)
             .map(res => res.json());
      }

   updateOrderState(data: any) {
           return this.http.post(this.apiBaseUrl + 'updateOrderState', data, this.options)
           .map(res => res.json());
    }

    updatePizzamenuAvailability(data: any) {
            return this.http.post(this.apiBaseUrl + 'updatePizzamenuAvailability', data, this.options)
            .map(res => res.json());
     }


    updatePizzeria(data: any) {
            return this.http.post(this.apiBaseUrl + 'updatePizzeria', data, this.options)
            .map(res => res.json());
     }

    deleteFromMenu(ida: string) {
            return this.http.delete(this.apiBaseUrl + 'deleteFromMenu' + ida)
            .map(res => res.json());
     }
    

    deletePizza(idPizza: string) {
            return this.http.delete(this.apiBaseUrl + 'deletePizza' + idPizza)
            .map(res => res.json());
     }

    addPizza(data: any) {
            return this.http.post(this.apiBaseUrl + 'addPizza', data, this.options)
            .map(res => res.json());
     }

    addPizzaToMenuPizzeria(data: any) {
            return this.http.post(this.apiBaseUrl + 'addPizzaToMenuPizzeria', data, this.options)
            .map(res => res.json());
     }

     authenticate(data: any) {
             return this.http.post(this.apiBaseUrl + 'authenticate', data, this.options)
             .map(res => res.json());
      }

}
