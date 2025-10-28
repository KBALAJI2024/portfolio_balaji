import { Component } from '@angular/core';

@Component({
  selector: 'app-data-attribute',
  standalone: false,
  templateUrl: './data-attribute.html',
  styleUrl: './data-attribute.css'
})
export class DataAttribute {

  dataPass(event : any){
     const target = event.target as HTMLElement;
     const id = target.dataset['id'];
     const name = target.dataset['name'];
     console.log("id value",id);
     console.log("name value",name);

     //normal attribute we use 
     const norId = target.getAttribute("id");
     const norName = target.getAttribute("name");
     console.log("normla id", norId);
     console.log("normal name", norName);

     

  }

}
