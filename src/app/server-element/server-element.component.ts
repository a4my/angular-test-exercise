import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
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
  @ViewChild('heading', { static: true} ) header: ElementRef
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInt called')
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck is running')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called')
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)

  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked is called')
  }

  ngAfterViewInit(){
    console.log('ngAfterContentInit is called')
    console.log('Text Content: ' + this.header.nativeElement.textContent)


  }

  ngAfterViewChecked() {
    console.log('AfterContentChecked is called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called')
  }

}
