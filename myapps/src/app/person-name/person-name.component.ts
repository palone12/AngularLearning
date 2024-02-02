import { Component } from '@angular/core';

@Component({
  selector: 'app-person-name',
  templateUrl: './person-name.component.html',
  styleUrl: './person-name.component.css'
})
export class PersonNameComponent {
  person:string ='';

  changeName(event:any) {
    console.log(event.target.value)
    this.person=event.target.value;     
  }
}
