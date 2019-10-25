import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  valueState = false;
  message$ = new BehaviorSubject(['Hello world']);

  click(): void {
    if (!this.valueState) {
      this.message$.next(['Hello space!']);
    } else {
      this.message$.next(['Hello world!']);
    }
      this.valueState = !this.valueState;    
  }
}
