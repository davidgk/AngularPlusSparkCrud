import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class IntegrationService {
  private url: string = "http://localhost:8090/integrations";


  constructor(private http: Http) { }

  getIntegrationStatus(){
    return this.http.get(this.url+"/status")
      .map(res => res.json());
  }

}
