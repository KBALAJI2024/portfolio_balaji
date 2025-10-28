  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {

    url = "https://jsonplaceholder.typicode.com";

    constructor(private http : HttpClient){

    }


    
  // create a service 
  fetchData() : Observable<any>{
    const url = this.url + '/posts';
    return this.http.get(url);
  }

  }
