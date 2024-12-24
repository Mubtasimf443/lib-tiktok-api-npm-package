# String Player 
<p>It Helps You To play with string and transform strings what are use in lots of cases of node.js application</p>


#### There are various string Manipulation function and class what Can yuo use
***LIKE:-***
```
import { log, MakePriceString, mekeLinkString,GenerateOTP,repleCaracter } from "string-player"
```



#### functionality of GenerateOTP Class
by default it return 6 charecters unique otp each time
```
import {GenerateOTP,log} from 'string-player'

let otp=new GenerateOTP();

log(otp.getPin())//returns 271633
log(otp.getPin())//returns 474316
log(otp.getPin())//returns 706210
```

_You can get opt of more or lest Carecter :-_
```
import {GenerateOTP,log} from 'string-player'

let less=new GenerateOTP(4);// 4 Charecters 
let more=new GenerateOTP(9);// 9 Charecters 


let opt_of_4_charecters=less.getPin() //return unique value like 7927
let opt_of_9_charecters=more.getPin();//return unique value like 640821514;


console.log({opt_of_4_charecters,opt_of_9_charecters});
//prints
// { opt_of_4_charecters: 7927,opt_of_9_charecters: 640821514 }

```


#### functionality of repleCaracter 
```
import { log, repleCaracter } from "string-player"



let a =`function() {
    return "Website is hack by us '
}`

a =await repleCaracter(a);
log(a)

```


returns 
```
function&#40;&#41; &#123;
    return &#34;Website is hack by us &#39;
&#125;
```



#### functionality of MakePriceString

```
import { log,  MakePriceString} from "string-player"

let a = 500;
a=await MakePriceString(a);
log(a)

//returns  500.00
```

#### functionality of mekeLinkString

```
import { log, mekeLinkString } from "string-player"

let a = 'https://www.your-website.com/a b c d f g e l k p n m o k j l i p q r s';

log(mekeLinkString(a))
//prints https://www.your-website.com/a-b-c-d-f-g-e-l-k-p-n-m-o-k-j-l-i-p-q-r-s

```

#### functionality of makeUrlWithParams
```
let reqData={
    command :'INIT',
    total_bytes:10240
} 
log(makeUrlWithParams('https://upload.twitter.com/1.1/media/upload.json',reqData))
//returns 'https://upload.twitter.com/1.1/media/upload.json?command=INIT&total_bytes=10240
```
#### functionality of breakJsonData
```
import { breakJsonData, log } from "./index.js"

let data=JSON.stringify({
    A:'A',
    B:'B',
    C:'C',
    D:'D',
    bol:true,
    fool:false,
    arr:["alert","WebTransport","wet"],
    e:"we"
})

log(data);
//prints
//{"A":"A","B":"B","C":"C","D":"D","bol":true,"fool":false,"arr":["alert","WebTransport","wet"],"e":"we"}


data= breakJsonData(data)
log(data);

//prints
// {
//     "A":"A",
//     "B":"B",
//     "C":"C",
//     "D":"D",
//     "bol":true,
//     "fool":false,
//     "arr":[
//     "alert",
//     "WebTransport",
//     "wet"
//     ],
//     "e":"we"
// }


```

##### From string-player@1.0.6 you can parse object on breckjsondata 

```
import { breakJsonData, log } from "./index.js"


let data = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10
}

log(data);

/* 
it prints
{
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10
}
    
*/
```


***You can contribute also by joining github-***<a href="https://github.com/Mubtasimf443/string-player">github Repository</a>


## Your Support will inspire me to create better packages for You
***Follow Me ***
Github => <a href="https://github.com/Mubtasimf443">Mubtasimf443</a>



