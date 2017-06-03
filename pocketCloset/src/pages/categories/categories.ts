import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClothesPage } from '../clothes/clothes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'categories.html'
})

export class CategoriesPage {
  categories: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.categories = this.db.list('categories');
  }

  showClothes(point){
    console.log('showClothes: '  + point.images[0].image);
    this.navCtrl.push(ClothesPage,{
      images: point.images
    });
  }
}
