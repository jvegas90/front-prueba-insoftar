import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  users:any=[];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe(
      res=>{
        this.users = res.data.map((obj) => {
          return {
            id: obj.id,
            name: obj.nombre,
            last_name: obj.apellidos,
            code_user:obj.cedula,
            phone:obj.telefono,
            email:obj.email
          };
        });
        console.log(this.users);
        console.log(res);
      },
      error=>{

      }
    );

  }
  deleteUser(idUser){
    this.userService.deleteUser(idUser).subscribe(
      res=>{
        console.log('Usuario Eliminado Con Exito');
        this.getUser();
      }
    );
  }
  
}
