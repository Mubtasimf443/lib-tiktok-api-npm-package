/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import Awaiter from "awaiter.js";
import fetch from "node-fetch";
import { log } from "string-player";





export default class Tiktok {
    constructor({key,secret,redirect_uri,scope}){ 
        this.key=key;
        this.secret=secret;
        this.redirect_uri=redirect_uri;
        this.scope=scope || ['user.info.basic'] ;
    }
    getAuthUrl(){
        let 
        client_key=this.key, 
        redirect_uri=this.redirect_uri, 
        scope=this.scope;
        let params=(new URLSearchParams({
            scope :scope.join(','),
            client_key,
            redirect_uri,
            state:Math.random().toString(36).substring(2),
            response_type:'code'
        })).toString();
        return ( `https://www.tiktok.com/v2/auth/authorize?` +params);
    };
    async getAccessToken(code){
        let 
        client_key=this.key, 
        redirect_uri=this.redirect_uri, 
        client_secret=this.secret,
        grant_type ='authorization_code';
        let urlencodedData = (new URLSearchParams({
            code: code,
            client_key,
            redirect_uri,
            client_secret,
            grant_type
        })).toString();
        let response = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            },
            body: urlencodedData
        });
        response=await response.json().catch(error => {
            return {
                error :{
                    name :'error in json parsing',
                    massage :"can't parse json"
                }
            }
        });
        if (response.data) {
            if (response.data.access_token && response.data.refresh_token) {
                return {
                    access_token:response.data.access_token ,
                    refresh_token: response.data.refresh_token
                }
            } else if (!(response.data.access_token && response.data.refresh_token)) {
                throw response;
            }
        }
        if (response.error) {
            return {
                hasError :true,
                error :response.error
            }
        };
        throw response;
    };
    Account=Account;
}

class Account {
    constructor(accessToken, refresh_token) {
        this.accessToken=accessToken;
        this.refresh_token=refresh_token;
    }
    async initVideoOnInbox(video_url) {
        let accessToken=this.accessToken;
        let response=await fetch('https://open.tiktokapis.com/v2/post/publish/inbox/video/init/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${accessToken}`
            },
            body: JSON.stringify({
                source_info: {
                    source: 'PULL_FROM_URL',
                    video_url
                }
            })
        });
        response = await response.json().catch(error => { return { error: { name: 'error in json parsing', massage: "can't parse json" } } });
        log(response);
        return response;
    }
    async postTiktokFromUrl({video_url , privacy_level, title, video_cover_timestamp_ms}){
        let access_token =this.accessToken;
        let response = await fetch('https://open.tiktokapis.com/v2/post/publish/video/init/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${access_token}`
            },
            body: JSON.stringify({
                post_info: {
                    title: title ?? 'No title is given',
                    privacy_level:privacy_level ?? 'SELF_ONLY',
                    video_cover_timestamp_ms: video_cover_timestamp_ms ?? 1000
                },
                source_info: {
                    source: 'PULL_FROM_URL',
                    video_url
                },
                post_mode: "DIRECT_POST",
            })
        });
        response = await response.json();
        return response;
    }
    async refresh_token({refresh_token, app_key}) {
        refresh_token=this.refresh_token || refresh_token;
        let response=await fetch('https://open-api.tiktok.com/oauth/refresh_token/', {
            method:'POST',
            headers :{
                'Content-Type':'application/json',
            },
            body :JSON.stringify({
                client_key :app_key,
                grant_type :"refresh_token",
                refresh_token:refresh_token
            })
        });
        response=await response.json();
        return response;

    }
    async getUserInfo(access_token){
        access_token =this.accessToken || access_token;
        let response=await fetch('https://open.tiktokapis.com/v2/post/publish/creator_info/query/',{
            method :"POST",
            headers :{
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization':' Bearer '+access_token
            }
        });
        response=await response.json();
        return response;
    }
}