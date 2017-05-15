import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'clothes.html'
})

export class ClothesPage {
  list: string[] = ["Sport", "Business", "Casual", "Party"];
  category: string;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.category = params.get('category');
    console.log('This test:' + this.category);
  }
}
