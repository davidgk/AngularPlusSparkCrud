import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContractEntitiesService {

  private url: string = "http://localhost:8090/contractor";


  constructor(private http: Http) { }

  getContractors(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getContractEntityByPartnerId(key: number) {
    return this.http.get(this.url +"/partner/"+key)
      .map(res => res.json());
  }


}
