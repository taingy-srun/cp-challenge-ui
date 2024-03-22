import { Component } from '@angular/core';
import { environment } from 'src/environments/enviroment.development';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    currentYear = new Date().getFullYear();
    authorLabel = environment.label_author;
    authorName = environment.author_name;
    copyright = environment.copyright;

}
