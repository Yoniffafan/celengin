import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public alertCtrl: AlertController) { }

    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }


}
