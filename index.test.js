/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import { log } from "string-player";
import Tiktok from "./index.js"
import fetch from "node-fetch";


let access_token=`<access_token>`

let tiktok=new Tiktok({});

let account=new tiktok.Account(access_token);



let data=await account.postTiktokFromUrl({
    video_url :'https://gojushinryu.com/video-for-download',
    title :'testing the api',
});
log(data);
// let data=await account.getUserInfo();



// let data=await account.uploadImages({
//     images :[
//         "https://gojushinryu.com/img/about_us_article_image.jpg",
//     ],
//     caption :"Images to test tiktok upload"
// }).catch(function (error) {
//     console.log('error is' ) ; 
//     log(error);
// });




