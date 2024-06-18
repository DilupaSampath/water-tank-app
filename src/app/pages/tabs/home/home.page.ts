import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading: boolean = true;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.initializeLoader();
    this.firebaseService.getItems().subscribe(data => {
      console.log(data);
    });
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 2000);
  }

  addItem() {

      this.firebaseService.createItem({ name: "Item"+ ((new Date()).getTime()) });
    
  }
}