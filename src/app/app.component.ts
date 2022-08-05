import { Component, OnInit } from '@angular/core';
import { concat, from, interval, observable, Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  title = 'angular Observable';
  constructor(private dataservice: DataService) {}

  //using observable constructor
  // myObservable = new Observable((observer: any) => {
  //   console.log('observable start');
  //   setTimeout(() => {observer.next('1');}, 1000);
  //   setTimeout(() => {observer.next('2');}, 2000);
  //   setTimeout(() => {observer.next('3');}, 3000);
  //   setTimeout(() => {observer.error(new Error('something went wrong'));}, 3000);
  //   setTimeout(() => {observer.next('4');}, 4000);
  //   setTimeout(() => {observer.next('5');}, 5000);
  //   setTimeout(() => {observer.complete();}, 7000);
  //  });
  //       //subscribe(next,error,complete)
  //  ngOnInit(){
  //   this.myObservable.subscribe((val)=>{console.log(val),
  //                               (error: any) => alert('error msg'),
  //                               () => alert('observer has complete and emit all value')},
  //   )
  //  }}

  //using create method
  //   myObservable = Observable.create((observer: any) => {
  //     console.log('observable start');
  //     setTimeout(() => {
  //       observer.next('1');
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next('2');
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next('3');
  //     }, 3000);
  //     // setTimeout(() => { observer.error(new Error('something went wrong'))}, 3000);
  //     setTimeout(() => {
  //       observer.next('4');
  //     }, 4000);
  //     setTimeout(() => {
  //       observer.next('5');
  //     }, 5000);
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 7000);
  //   });
  //   ngOnInit() {
  //     this.myObservable.subscribe((val: any) => {
  //       console.log(val),
  //         (error: any) => alert('error msg'),
  //         () => alert('observer has complete and emit all value');
  //     });
  //   }
  // }

  //use operator
  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];
  //   // myObservable = of(this.array1, this.array2, 20, 45, 'hiiiii');
  //   myObservable = from(this.array1);
  //   ngOnInit() {
  //     this.myObservable.subscribe((val) => {
  //       console.log(val),
  //         (error: any) => alert('error msg'),
  //         () => alert('observer has complete and emit all value');
  //     });
  //   }
  // }

  //   myObservable = from(this.array1).pipe(
  //     map((val: any) => {
  //       return val * 5;
  //     }),
  //     filter((val) => {
  //       return val >= 30;
  //     })
  //   );
  //   ngOnInit() {
  //     this.myObservable.subscribe((val) => {
  //       console.log(val),
  //         (error: any) => alert('error msg'),
  //         () => alert('observer has complete and emit all value');
  //     });
  //   }
  // }

  //   myObservable = from(this.array1);
  //   transformedobs = this.myObservable.pipe(
  //     map((val: any) => {
  //       return val * 5;
  //     }),
  //     filter((val) => {
  //       return val >= 30;
  //     })
  //   );
  //   // filteredobs = this.transformedobs.pipe(
  //   //   filter((val) => {
  //   //     return val >= 30;
  //   //   })
  //   // );

  //   ngOnInit() {
  //     this.transformedobs.subscribe(
  //       // this.filteredobs.subscribe(
  //       (val: any) => console.log(val),
  //       (error: any) => alert('error msg'),
  //       () => alert('observer has complete and emit all value')
  //     );
  //   }
  // }

  // for subscribe method use
  counterSub: any;
  counterObservable = interval(1000);
  subScribe() {
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val);
    });
  }
  unSubScribe() {
    this.counterSub.unsubscribe();
  }
  ngOnInit() {}
}
