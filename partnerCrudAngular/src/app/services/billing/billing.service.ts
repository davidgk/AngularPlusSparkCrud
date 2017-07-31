import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BillingService {
  private url: string = "http://localhost:8090/billing";


  constructor(private http: Http) { }

  getBillingEntities(){
    return this.http.get(this.url+"/entities")
      .map(res => res.json());
  }

  getBillingStatus(){
    return this.http.get(this.url+"/status")
      .map(res => res.json());
  }

  getBillingEntityBykey (fakeBillingEntitykey: number) {
    return this.http.get(this.getEntityUrl() +"/"+fakeBillingEntitykey)
      .map(res => res.json());
  }

  private getEntityUrl() {
    return this.url + "/entity"
  }
}
