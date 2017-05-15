import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClothesPage } from '../clothes/clothes';

@Component({
  templateUrl: 'categories.html'
})

export class CategoriesPage {
  list: string[] = ["Sport", "Business", "Casual", "Party"];

  constructor(public navCtrl: NavController) {
    this.getDefaults();
  }

  getDefaults(){

  }

  showClothes(category){
    console.log('showClothes: '  + category);
    this.navCtrl.push(ClothesPage,{
      category: category
    });
  }
}
