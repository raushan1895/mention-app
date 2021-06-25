import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtValue: string = "";

  mentionConfig = {
    items: ['Gina Williams', 'Jake Williams', 'Jamie John', 'John Doe', 'Jeff Stewart', 'Paula M. Keith'],
    triggerChar: "@"
  }

  onSubmit(dropdownForm: NgForm){
    let str = dropdownForm.value.txtValue;
    let res = str.replace(/[^a-zA-Z ]/g, "");
    this.txtValue = res;
  }

  resetForm(dropdownForm: NgForm){
    dropdownForm.reset();
  }
}
