import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class HttpService {

  constructor(public http: Http) {
  }
  getServe(){
    return this.http.get('./assets/data/data.json')
      .toPromise()
      .then(response => response.json())
      .catch( err => {
        return Promise.reject(err)
      })
  }
}
