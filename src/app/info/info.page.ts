import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { TwitterService } from '../api/twitter.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  userFollowing: any[]=[]; 
  userFollowers: any[]=[];
  type = "followers";

  constructor(private route: ActivatedRoute, private twitterService: TwitterService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.makecall(id);
   }

  ngOnInit() {
  }

  makecall(id: string){
    this.twitterService.getFollowers(id).subscribe(data => {
      this.userFollowers=data.data;
      console.log("Followers:");
      console.log(this.userFollowers);
    });

    this.twitterService.getFollowing(id).subscribe(data =>{
      this.userFollowing=data.data;
      console.log("Following:");
      console.log(this.userFollowing);
    });
  }

  refresh(){
    console.log(this.type);
  }

}
