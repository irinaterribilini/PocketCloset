import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'clothes.html'
})

export class ClothesPage {
  list: string[] = ["Sport", "Business", "Casual", "Party"];
  images: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.images = params.get('images');
    console.log('This test:' + this.images[0].image);
  }

}
