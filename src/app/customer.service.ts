import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API="http://localhost:8081";
  public registerCustomer(customerData: any){
    return this.http.post(this.API + '/registerCustomer' , customerData);
  }

  public getCustomer(){
    return this.http.get(this.API+'/getCustomer');
  }

  public deleteCustomer(id:any){
    return this.http.delete(this.API+'/deleteCustomer?id=' + id);
  }

  public updateCustomer(customer: any){
    return this.http.put(this.API +'/updateCustomer', customer);
  }
  constructor(private http: HttpClient) { }
}
