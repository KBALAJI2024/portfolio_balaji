import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit{
  constructor(private service : DataService){
     this.fatchUserListData();
  }

  // varible
  listData : any[]=[];


  ngOnInit(){
    
  }

  trackById(index: number, item: any) {
  return item.id;
}


  fatchUserListData(){
    this.service.fetchData().subscribe((res : any ) =>{
       
          console.log("data is  fatch", res);
          this.listData = res;
            
    })
  }
  

}
