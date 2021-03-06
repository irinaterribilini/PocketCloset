import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'upload.html'
})

export class UploadPage {
  photo: string;
  selectedValue: any;
  categories: FirebaseListObservable<any>;
  key: any;

  constructor(public navCtrl: NavController, public params: NavParams, public db: AngularFireDatabase, public afAuth: AngularFireAuth, public viewCtr: ViewController) {
      this.categories = this.db.list('categories');
      this.photo = params.get('photo');
  }

  cancel(){
    this.viewCtr.dismiss();
  }

  save(){
    let subcription = this.categories.subscribe(
    competitors => {
        competitors.map(competitor =>{
          if(competitor.category === this.selectedValue){
            var imageList = competitor.images;
            imageList.push({image:this.photo});
            this.categories.update(competitor.$key, {images:imageList});
          }
        })
    });
    subcription.unsubscribe();
    this.cancel();
  }

  changeCategory(selectedValue){
    this.selectedValue = selectedValue;
  }
}
