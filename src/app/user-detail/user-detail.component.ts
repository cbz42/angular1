import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @ Input() item:{name:String,age:number} = {name:'',age:0};
  @ Output() updatedetail = new EventEmitter<string>();
}
