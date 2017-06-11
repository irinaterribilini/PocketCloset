import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClothesPage } from '../clothes/clothes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'categories.html'
})

export class CategoriesPage {
  categories: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public afAuth: AngularFireAuth, public alertCtrl: AlertController) {
    this.categories = this.db.list('categories');
  }

  showClothes(point,key){
    this.navCtrl.push(ClothesPage,{
      images: point.images,
      category_key: key
    });
  }

   showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'New Category',
        message: "Enter a name for your new category",
        inputs: [
          {
            name: 'title',
            placeholder: 'Category Name'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.categories.push({category: data.title, images: [{image: ''}]});
            }
          }
        ]
      });
      prompt.present();
    }

    deleteCategory(categoryKey: string){
      this.categories.remove(categoryKey);
    }

}
