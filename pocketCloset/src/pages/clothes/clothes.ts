import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'clothes.html'
})

export class ClothesPage {
  images: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.images = params.get('images');
  }

}
