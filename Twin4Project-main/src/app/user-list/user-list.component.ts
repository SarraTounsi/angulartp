import { Component, OnInit } from '@angular/core';
import { Userlist } from '../model/userlist';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public list:Userlist[];

  constructor() { }

  ngOnInit(): void {
    this.list= [
      {
        id: 13,
    name: "Phyllis Gatlin",
    number:  21555689,
    mail:  "PhyllisGatlin@spy.com",
    adress: "52 Ilchester MYBSTER 9WX",    
        picture:'https://bootdey.com/img/Content/avatar/avatar1.png'
      },
      {
        id: 14,
        name: "James Nix",
        number:  95333689,
        mail:  " JamesNix@spy.com",
        adress: "5 Boar Lane SELLING 2LG",    
            picture:'https://bootdey.com/img/Content/avatar/avatar1.png'
      }
    ]
  }

  deleteUser(userlist:Userlist):void{
    let i = this.list.indexOf(userlist);
    if(i!=-1){
      this.list.splice(i,1)
    }
    
  }

}