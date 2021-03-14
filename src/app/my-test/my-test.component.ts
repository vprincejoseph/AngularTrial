import { Component, OnInit } from '@angular/core';
import { MyModel } from '../Model/MyModel';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {

  public Id: string ="";
  public Name: string ="";
  public myResult: any;
  constructor(private dataService: MyServiceService) { 

  }


  ngOnInit(): void {     
    this.dataService.GetDBValues().subscribe( data =>{
      this.myResult = data.Table[0];
    });

   
  }

}
