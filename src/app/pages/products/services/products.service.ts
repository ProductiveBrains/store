import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl='https://ut.sotano.digital/utjuicios/DB/all_Personas';

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }


}
