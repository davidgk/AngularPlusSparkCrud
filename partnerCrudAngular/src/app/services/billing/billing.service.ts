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
    return this.http.get(this.getEntityUrl())
      .map(res => res.json());
  }

  getBillingStatus(){
    return this.http.get(this.getStatusUrl())
      .map(res => res.json());
  }

  getBillingEntityByKey (key: number) {
    return this.http.get(this.getEntityUrl() +"/"+key)
      .map(res => res.json());
  }

  getBillingStatusByKey(key: number) {
    return this.http.get(this.getStatusUrl() +"/"+key)
      .map(res => res.json());
  }

  private getEntityUrl() {
    return this.url + "/entity"
  }
  private getStatusUrl() {
    return this.url + "/status"
  }
}
