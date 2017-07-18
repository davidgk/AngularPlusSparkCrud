import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PartnerService {

  private url: string = "http://localhost:4567/partner";
  

  constructor(private http: Http) { }

  getPartners(){
    let method = 'GET';  
    let requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers.append("Access-Control-Allow-Origin", "*");
    requestOptions.method = method;
    return this.http.request(this.url,requestOptions)
      .map(res => res.json());
  }

  deletePartner(id){
    return this.http.delete(this.getPartnerUrl(id))
      .map(res => res.json());
  }

  private getPartnerUrl(id){
    return this.url + "/" + id;
  }
 
}





