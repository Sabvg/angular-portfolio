import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  nombrePattern: string = '([a-zA-Z]+)'
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.pattern(this.nombrePattern)]],
    email: [ , [Validators.required, Validators.pattern(this.emailPattern)]],
    asunto: [ , [Validators.required, Validators.minLength(4)]],
    mensaje: [ , [Validators.required, Validators.maxLength(500)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.miFormulario.reset({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    })
  }

  get f() { return this.miFormulario.controls; }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && 
           this.miFormulario.controls[campo].touched;
  }
  
  guardar() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.miFormulario.value))

    this.miFormulario.reset();
  }

}



