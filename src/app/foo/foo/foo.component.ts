import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('foo destroy');
  }

}
