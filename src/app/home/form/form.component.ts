import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formRegister: FormGroup;
  editUser = false;
  idUser?;
  constructor(private fb: FormBuilder, private userService: UsersService, private activatedRoute: ActivatedRoute) {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idUser) {
      this.editUser = true;
      this.getUserById(this.idUser);
    }
  }

  ngOnInit(): void {

    this.formRegister = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      code_user: ['', [Validators.required, Validators.pattern('^[0-9]+'), Validators.maxLength(10)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+'), Validators.minLength(7), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern('^[_a-zA-Z0-9-\+]+(\.[_a-zA-Z0-9-+]+)@[a-zA-Z0-9-]+(\.[a-zA-Z]+)\.[a-zA-Z]{2,4}$')]]
    });
  }
  register() {
    if (!this.formRegister.valid) {
      console.log('Formulario Invalido')
    } else {
      const dataRegister = this.formRegister.value;
      let data = {
        nombre: dataRegister.name,
        apellidos: dataRegister.last_name,
        cedula: dataRegister.code_user,
        telefono: dataRegister.phone,
        email: dataRegister.email
      }
      console.log(data);
      if (!this.editUser) {
        this.userService.register(data).subscribe(
          res => {
            console.log(res.message)
          },
          error => { }
        );
      } else {
        this.userService.editUser(data, this.idUser).subscribe(
          res => {
            console.log('Usuario Editado con Exito')
          }
        )

      }
    }
  }

  getUserById(idUser) {
    this.userService.getUserById(idUser).subscribe(
      res => {
        this.formRegister.get('name').setValue(res.data.nombre);
        this.formRegister.get('last_name').setValue(res.data.apellidos);
        this.formRegister.get('code_user').setValue(res.data.cedula);
        this.formRegister.get('phone').setValue(res.data.telefono);
        this.formRegister.get('email').setValue(res.data.email);
      }
    )

  }
}
