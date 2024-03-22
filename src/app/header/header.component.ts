import { Component } from '@angular/core';
import { environment } from 'src/environments/enviroment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  welcome = environment.welcome;

}
