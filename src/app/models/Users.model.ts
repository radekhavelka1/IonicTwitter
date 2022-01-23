export interface Users{
    data: [{
        created_at: number;
        description: string;
        id: string;
        location: string;
        name: string;
        pinned_tweet_id: string;
        profile_image_url: string;
        protected: boolean;
        url: string;
        username: string;
        verified: boolean
      }];
}