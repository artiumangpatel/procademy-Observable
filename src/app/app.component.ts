import { Component, OnInit } from '@angular/core';
import { from, observable, Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular Observable';
  //using observable constructor
  // myObservable = new Observable((observer: any) => {
  //   console.log('observable start');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => { observer.error(new Error('something went wrong'))}, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 7000);

  //using create method
  // myObservable = Observable.create((observer: any) => {
  //   console.log('observable start');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => { observer.error(new Error('something went wrong'))}, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 7000);
  //});
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C'];
  myObservable = of(this.array1, this.array2, 20, 45, 'hiiiii');
  // myObservable = from(this.array1);

  ngOnInit() {
    // title = 'angular-observables';
    this.myObservable.subscribe(
      (val: any) => console.log(val),
      (error: any) => alert('error msg'),
      () => alert('observer has complete and emit all value')
    );
  }
}
