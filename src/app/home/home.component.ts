import { Component,OnInit } from '@angular/core';
import { ServiceComponent } from '../service/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  implements OnInit{

  RecommendedsAlbums:any=[]

  categories:string[]=['Relax','Romance','Podcasts','Energize','Feel good','Commute','Sad','Workout','Focus']

  constructor (private musicService:ServiceComponent){}

  ngOnInit() {
    this.RecommendedsAlbums = this.musicService.RecommendedsAlbums
  }
}

