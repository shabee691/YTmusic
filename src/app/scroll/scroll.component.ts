import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent  implements OnInit{
  @Input()
  secTitle:string =''

  @Input()
  mainTitle:string=""

  @Input()
  buttonTitle:string="Play all"

  @Input()
  addClass:string="ml-[400px]"
  @Input()
    scrollClass:string=""
  ngOnInit(){
    if(this.secTitle==''){
        this.addClass="ml-[460px]"
    }
}
}
