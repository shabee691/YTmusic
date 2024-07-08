import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardbig',
  templateUrl: './cardbig.component.html',
})
export class CardbigComponent {
  @Input()
  image:string=''
  @Input()
  songName:string=''
  @Input()
  songDesc:string=''
}
