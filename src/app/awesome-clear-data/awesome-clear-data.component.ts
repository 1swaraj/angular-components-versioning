import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-clear-data',
  templateUrl: './awesome-clear-data.component.html',
  styleUrls: ['./awesome-clear-data.component.css']
})
export class AwesomeClearDataComponent implements OnInit {

  public clicked: boolean = true
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("click") onClick() {
    this.clicked = true
    const jwtToken = localStorage.getItem("jwtToken")
    const jwtTokenString = jwtToken !=null ? jwtToken : ""
    const expiry = localStorage.getItem("expiry")
    const expiryString = expiry !=null ? expiry : ""
    localStorage.clear()
    localStorage.setItem("jwtToken", jwtTokenString)
    localStorage.setItem("expiry", expiryString)
    setTimeout(() => {
      this.clicked = false
      location.reload()
    }, 5000)
    
  }

}
