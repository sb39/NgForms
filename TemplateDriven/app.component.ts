import { Component } from '@angular/core';
//import { FormGroup, FormControl, FormControlDirective } from "@angular/forms";
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit = function(user) {
    console.log(user);
  }
}
