import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweets } from '../models/Tweets.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Users } from '../models/Users.model';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  bearer = 'AAAAAAAAAAAAAAAAAAAAAIZfWgEAAAAAyxRHx7kUt6eUk4aqGXaIB8XGtNM%3D95XPUDJ2Arqd7Ggd2UMm23DSaZirp6xrlb7FLk5R14ffiuasyp';

  constructor(private http: HttpClient) {
  }

  getSearch(text: string) : Observable<Tweets>{
    const url = 'https://cors.jakubh.cz/api.twitter.com/2/tweets/search/recent?query='+text+'&expansions=referenced_tweets.id,author_id,entities.mentions.username&tweet.fields=created_at,lang,source,text&user.fields=name,username';

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.bearer
      
    });

    return this.http.get<Tweets>(url,{headers})
    
  }

  getName(nameText: string) : Observable<Users> {
    const url = 'https://cors.jakubh.cz/api.twitter.com/2/users/by/username/'+nameText+'?expansions=pinned_tweet_id&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,public_metrics,organic_metrics,promoted_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld'

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.bearer
      
    });

    return this.http.get<Users>(url,{headers})

  }

  getFollowers(nameFollowers: string): Observable<any>{
    const url = 'https://cors.jakubh.cz/api.twitter.com/2/users/'+nameFollowers+'/followers'

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.bearer
    });

    return this.http.get<any>(url,{headers})
  }


  getFollowing(nameFollowing: string): Observable<any>{
    const url = 'https://cors.jakubh.cz/api.twitter.com/2/users/'+nameFollowing+'/following'

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.bearer
    });

    return this.http.get<any>(url,{headers})
  }

}
