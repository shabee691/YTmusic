import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  @Input()
  secTitle:string =''

  @Input()
  mainTitle:string=""

  @Input()
  buttonTitle:string="Play all"

  @Input()
  skipClass:string=""
  scrollClass:string=""
}
