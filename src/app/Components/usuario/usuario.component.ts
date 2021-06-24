import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number;
  nombre: string;
  correo: string;
  estado: string;
  sexo: string;
  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      console.log(data)
      this.nombre = data.data.name;
      this.correo = data.data.email;
      this.estado = data.data.status;
      this.sexo = data.data.gender;
    })
  }

}
