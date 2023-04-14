import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-videos',
  templateUrl: "./videos.component.html",
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit{
 title!: string | null;

 constructor(private route: ActivatedRoute) {
 }

 ngOnInit() {
   this.title = this.route.snapshot.paramMap.get('title');
 }
}
