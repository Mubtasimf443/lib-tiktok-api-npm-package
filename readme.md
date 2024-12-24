this is a npm package for handling tiktok api's

## Get Started 

```
let tiktok=new Tiktok({
    key :TIKTOK_KEY,
    secret:TIKTOK_SECRET,
    redirect_uri :TIKTOK_REDIRECT_URI,
    scope :['user.info.basic','video.upload','video.publish']
})

```

## Auth with tiktok-api

#### First get a auth url for authentication
```
app.get('/auth',async function (req,res){
    return res.redirect(tiktok.getAuthUrl());
});

```


#### get access token and refresh token

```
app.get('/callback',async function (req,res){
    let {access_token,refresh_token}=await tiktok.getAccessToken(req.query.code);
})
```

### Tiktok video upload 


#### init video upload to inbox
```
let Account=new tiktok.Account(access_token);
let data=await Account.initVideoOnInbox('https://gojushinryu.com/video-for-download');
```

#### upload video directly

```
let Account=new tiktok.Account(access_token);
let response =await Account.postTiktokFromUrl({
    video_url :'<VIDEO_URL>',
    privacy_level :'SELF_ONLY',
    title :"<VIDEO_CAPTION>',
    video_cover_timestamp_ms : 1000 // optional
})

```


#### get user info

```
let Account=new tiktok.Account(access_token);
let data=await Account.getUserInfo()

```


#### get new access token

```
let TIKTOK_KEY="<TIKTOK_KEY>";
let Account=new tiktok.Account(access_token);
let data=await Account.refresh_token({app_key});
```

<strong>Follow ME</strong>
***I will be very happy if you support me by following me or offering me a job***
<ol>
<li><a href="https://github.com/Mubtasimf443">Github Profile</a></li>
<li><a href="https://x.com/MubtasimFu11492">X twitter</a></li>
<li><a href="https://web.facebook.com/muhammadmubtasimf">Facebook</a></li>
<li><a href="https://www.upwork.com/freelancers/~01d88c06387ca7603a">Upwork</a></li>
<li><a href="tel:+8801750147694">+8801750147694</a></li>
</ol>
