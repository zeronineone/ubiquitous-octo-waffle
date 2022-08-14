import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayConfig = {
    id:"id",
    title:"title",
    userName:"username",
    password:"pass",
    url:"url",
    description:"description",
   hint:"hint",
   createdAt:"createdAt",
   modifiedAt:"modifiedAt"
 }

}
