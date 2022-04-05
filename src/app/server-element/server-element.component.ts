import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInt called')

  }

  ngDoCheck() {
    console.log('ngDoCheck is running')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked is called')
  }

  ngAfterViewInit(){
    console.log('ngAfterContentInit is called')
  }

  ngAfterViewChecked() {
    console.log('AfterContentChecked is called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called')
  }

}
