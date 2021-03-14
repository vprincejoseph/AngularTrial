import { Injectable } from '@angular/core';
import { MyModel } from './Model/MyModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private REST_API_SERVER = "https://localhost:44389/weatherforecast";

  constructor(private httpClient: HttpClient) { }

  public  GetDBValues()
  {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
