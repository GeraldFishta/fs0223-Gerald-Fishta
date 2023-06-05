
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Card } from '../Class/card';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor( private http:HttpClient ) { }

  get(){
    return this.http.get<Card[]>(this.apiUrl)
  }

  post(card:Card){
    return this.http.post<Card>(this.apiUrl, card)
  }

  put(card:Card){
    return this.http.put<Card>(this.apiUrl + '/' + card.id, card )
  }

  delete (id:number){
    return this.http.delete(this.apiUrl + '/' + id)
  }


}
