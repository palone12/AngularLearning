import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
 @Input() productName: string[] = [];

 data :any = [];

  myObservable = new Observable((observer)=> {
    setTimeout(() => {observer.next(1)},1000);
    setTimeout(() => {observer.next(2)},2000);
    setTimeout(() => {observer.next(3)},3000);
    setTimeout(() => {observer.next(4)},4000);
    setTimeout(() => {observer.complete()},5000);
  })

  getAsyncData() {
    this.myObservable.subscribe({
      next:(value:any)=>{
          this.data.push(value)
      },
      complete() {
        alert('Emitting Data From Observable Completed')
      }
    })
  }
}
