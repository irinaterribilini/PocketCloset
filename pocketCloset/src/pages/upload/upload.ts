import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'upload.html'
})

export class UploadPage {
  photo: string;
  selectedValue: any;
  categories: FirebaseListObservable<any>;
  categoriesData: FirebaseObjectObservable<any>;
  key: any;

  constructor(public navCtrl: NavController, public params: NavParams, public db: AngularFireDatabase, public afAuth: AngularFireAuth, public viewCtr: ViewController) {
      this.categories = this.db.list('categories');
      this.categoriesData = this.db.object('categories');
      this.photo = params.get('photo');
  }

  close(){
    this.viewCtr.dismiss();
  }

  save(){
    console.log('save method');

    this.categories.subscribe(
    competitors => {
      console.log(competitors);
        competitors.map(competitor =>{
          //console.log(competitor)
          if(competitor.category === this.selectedValue){
            //console.log(competitor.$key);
            var imageList = competitor.images;
            imageList.push({image:this.photo});
            console.log(imageList);
            this.categories.update(competitor.$key, {images:imageList});
            //competitors[0].images.push({image: 'photo'});
            //this.categories.update()
            //competitor.images.push({image: 'photo'})
          }
        })
    });
    this.viewCtr.dismiss();
  }

  changeCategory(selectedValue){
    this.selectedValue = selectedValue;
    console.log('value: ' + this.selectedValue);
  }
}
