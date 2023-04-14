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
        title:'Arche de noe',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Le jardin d\'Eden',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Mashia Messie Mahdi',
      },
      {
        image:'../assets/image/arch.jpg',
        title:'Le Bâton de Moïse',
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
