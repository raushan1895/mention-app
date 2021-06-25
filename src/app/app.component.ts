import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'textarea-app';
  txtValue: string = "";

  mentionConfig = {
    items: ["Noah", "Liam", "Mason", "Jacob"],
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
