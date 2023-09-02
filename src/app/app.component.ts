import { Component,OnInit} from '@angular/core';
import { Subject,pipe } from 'rxjs';
@Component({
  selector: 'app-root',
  //standalone : true,
  
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css'
})

export class AppComponent implements OnInit {
  title = 'homes';
  //const sub = new Subject();
  userDetails = [
    {name:'roshan',age:23},
    {name:'ramesh',age:5}
  ]

  updateData(data:String){
    console.warn(data);
  }

  today = new Date();

  ngOnInit(): void {
    
  }

}