import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user.module';
import { VestuarioComponent } from '../vestuario/vestuario.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'exAdrianaCharpe';

}
