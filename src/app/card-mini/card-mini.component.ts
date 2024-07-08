import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
})
export class CardMiniComponent {
  @Input()
  image:string='../../assets/images/songs/'
  @Input()
  songName:string=''
  @Input()
  songDesc:string=''
}
