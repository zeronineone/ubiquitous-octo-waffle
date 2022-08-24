import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent implements OnInit {

  constructor() { }
  @Input() typeOfData: string = "";
  ngOnInit(): void {
  }

}
