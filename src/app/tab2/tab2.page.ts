import { Component } from '@angular/core';
import { TwitterService } from '../api/twitter.service';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Users } from '../models/Users.model';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mysearchinput = '';
  loadingDialog: any;
  //tweetsResult$: Observable<Tweets>;
  shownUsers: any[];

  constructor(private twitterService: TwitterService, public loadingController: LoadingController, private router:Router) {}

  searchForName(){
      this.presentLoading();
        this.twitterService.getName(this.mysearchinput).subscribe((data: Users) => {
        this.shownUsers = data.data;
        console.log(data);
        this.mysearchinput='';
        this.loadingDialog.dismiss();
    })
  };


          

    async presentLoading(){
      this.loadingDialog = await this.loadingController.create(
      {
      message: 'Waiting to proccede',
      });
      await this.loadingDialog.present();
      }
  
}
  


