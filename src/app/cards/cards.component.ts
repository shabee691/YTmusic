import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input()
  image:string=''
  @Input()
  songName:string=''
  @Input()
  songDesc:string=''
  @Input()
  songView:string =""
}
