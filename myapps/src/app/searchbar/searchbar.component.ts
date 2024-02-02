import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  searchResult :string = '';

  inputSearch(event:any) {
    this.searchResult=event.target.value;
  }

}
