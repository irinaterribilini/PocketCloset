import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'clothes.html'
})

export class ClothesPage {
  images: any;
  category_key: any;
  categories: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public params: NavParams, public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.categories = this.db.list('categories');
    this.images = params.get('images');
    this.category_key = params.get('category_key');
  }

  deletePhoto(imageData){
    /* Muss noch fertig gemacht werden!!!!
    console.log(this.category_key);
    let subcription = this.categories.subscribe(
      competitors => {
          competitors.map(competitor => {

            if (competitor.$key === this.category_key){
              competitor.images.map(imageObject =>{

                if (imageObject.image === imageData){
                  var index = competitor.images.indexOf(imageData);
                  competitor.images.splice(index,1);

                  this.categories.update(this.category_key, {images:[{imageObject}]});
                }

              })
            }

          })
      }
    );
    subcription.unsubscribe();
    */

  }

}
