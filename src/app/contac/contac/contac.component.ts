import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { EmailServiceService } from 'src/app/email-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosContacto } from 'src/app/datos-contacto';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contac',
  standalone: true,
  imports: [NavComponent, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContacComponent { 

  constructor(private emailService: EmailServiceService) {    
  }  

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

   save(){
      
      this.emailService.sendEmail(this.userForm.value as DatosContacto).subscribe((response: any) =>{        
        this.userForm.reset();
        alert("Mensaje enviado");
      })
    
  }
 }