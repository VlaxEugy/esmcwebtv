import {Component, OnInit} from '@angular/core';
import {MiniCard} from "../models/mini-card.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cards!: MiniCard[]
  ngOnInit() {
    this.cards =[
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Title',
      },
    ]
  }
}
