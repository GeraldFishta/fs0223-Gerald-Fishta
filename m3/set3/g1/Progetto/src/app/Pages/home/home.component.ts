import { Component, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { Card } from 'src/app/Class/card';
import { ServiceService } from 'src/app/Service/service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sub!:Subscription
  cardArray:Card[] = [];
  likedCard: number[] = []

  constructor ( private serviceCard:ServiceService) {}

  ngOnInit(): void {

    this.sub = this.serviceCard.get().subscribe(resolve =>{
      this.cardArray = resolve.filter( filtered => {
        return filtered.id < 20
      })
    })
  }

  likeCard(id:number) : void {
    this.likedCard.push(id)
  }

  deleteCard(id:number) : void {
    this.serviceCard.delete(id)
    console.log("eliminata la carta con id " + id )
  }

}









