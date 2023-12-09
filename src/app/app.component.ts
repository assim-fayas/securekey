import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private clipboard: Clipboard) { }

  passwordlength: number = 12
  small: boolean = false
  capital: boolean = false
  number: boolean = false
  special: boolean = false
  passsmall: string = 'abcdefghijklmnopqrstuvwxyz'
  passcapital: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  passnumber: string = "123456789"
  passspecial: string = "!@#$%&*"
  newpassword: string = ""

  generate() {
    let validcharacter = ''
    if (this.small) {
      validcharacter += this.passsmall
    }
    if (this.capital) {
      validcharacter += this.passcapital
    }
    if (this.number) {
      validcharacter += this.passnumber
    }
    if (this.special) {
      validcharacter += this.passspecial
    }
    if (validcharacter.length === 0) {
      alert("Please select any of the character type")
    }
    console.log(validcharacter);

    let password = ""
    for (let i = 0; i < this.passwordlength; i++) {
      const randomIndex = Math.floor(Math.random() * validcharacter.length);
      password += validcharacter.charAt(randomIndex)
    }
    this.newpassword = password
  }
  copy() {
    const passinput = document.getElementById('passwordgenerated') as HTMLInputElement;
    if (passinput) {
      this.clipboard.copy(passinput.value);
    }

  }
}
