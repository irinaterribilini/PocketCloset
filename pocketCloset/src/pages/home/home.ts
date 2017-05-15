import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    
  }

  showLists(){
    this.navCtrl.push(CategoriesPage);
  }
}
