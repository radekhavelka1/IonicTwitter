import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TwitterService } from '../api/twitter.service';
import { Tweets } from '../models/Tweets.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  myinput = '';
  //tweetsResult$: Observable<Tweets[]>;
  loadingDialog: any;
  //tweetsResult$: any[];
  shownItems: any[];
   
  constructor(private twitterService: TwitterService, public loadingController: LoadingController) {}

  async ngOnInit() {

  }

  searchForTweets(){
    if(this.myinput.length >= 2){
      this.presentLoading();
        this.twitterService.getSearch(this.myinput).subscribe((data: Tweets) => {
        this.shownItems = data.data;
        console.log(data);
        this.myinput='';
        this.loadingDialog.dismiss();
    });
  }
} 


async presentLoading(){
  this.loadingDialog = await this.loadingController.create(
  {
    message: 'Waiting to proccede',
  });
    await this.loadingDialog.present();
  }
}
