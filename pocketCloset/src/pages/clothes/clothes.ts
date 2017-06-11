import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'clothes.html'
})

export class ClothesPage {
  images: any;
  category_key: any;
  categories: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public params: NavParams, public db: AngularFireDatabase, public afAuth: AngularFireAuth, public alertCtrl: AlertController) {
    this.categories = this.db.list('categories');
    this.images = params.get('images');
    this.category_key = params.get('category_key');
  }

  deletePhoto(imageData){
    let confirm = this
      .alertCtrl
      .create({
        title: 'Sure you want to delete this photo? You cannot undo it!',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.delete(imageData);
            }
          }
        ]
      });
    confirm.present();
  }

  delete(imageData){
    let subcription = this.categories.subscribe(
      competitors => {
          competitors.map(competitor => {

            if (competitor.$key === this.category_key){
              var index = competitor.images.findIndex(imageObject => {
                return (imageObject.image === imageData);
              });
              competitor.images.splice(index,1);
              this.categories.update(this.category_key, {images:competitor.images});
            }

          })
      }
    );
    subcription.unsubscribe();
  }

}
