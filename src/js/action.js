/**
 * Actions define in this file.
 * Created by tokei on 2017/3/1.
 */


let objMsg = {
    userName: 0,
    userEmail: 0,
    userWebsite: 0,
    userComBody: 0
};

let obj2StrMap = (obj) => {
    let strMap = new Map();
    for(let k of Object.keys(obj)){
        strMap.set(k, obj[k]);
    }
    return strMap;
};

let json2PostParams = (json) => {

    let mapJson =  obj2StrMap(JSON.parse(json));
    let postParams = '';
    for(let item of mapJson.entries()){
        postParams += `${item[0]}=${item[1]}&`;
    }
    postParams = postParams.substring(0,postParams.length-1);
    return postParams;
};

let getJSON = (url) => {
   let promise = new Promise(function(resolve, reject){
        let client = new XMLHttpRequest();
        client.open("GET",url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

         function handler(){
           if( this.readyState !==4 ) return;
           if( this.status == 200){
              resolve( this.response );
           } else {
             reject(new Error(this.statusText));
           }
         }
   });

  return promise;
}

let postJSON = () => {
    let promise = new Promise(function(resolve, reject){
        // console.log(objMsg);
        /*let params = JSON.stringify({
            author:'NicoNicoNi22343232',
            mailaddr:'1223203@qq.com',
            website:'it is website',
            comment:'sample comment'
        });*/
        let params = JSON.stringify({
            author: objMsg.userName,
            mailaddr: objMsg.userEmail,
            website: objMsg.userWebsite,
            comment: objMsg.userComBody
        });
        params = json2PostParams(params);
        // console.log(params);
        let client = new XMLHttpRequest();
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.open( 'POST', '/api/postComment', true );
        client.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        client.send(params);
        //client.send('author=Nico&mailaddr=22@qq.com&website=http://2321232&comment=nimei');

        function handler(){
            if( this.readyState !==4 ) return;
            if( this.status == 200){
                resolve( this.response );
                // console.log('the response has been sent');
                // console.log(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
    return promise;
}

let actions = {

    submitComment: () => {
        return {
            type: 'USER_SUBMIT_COMMENT',
            objMsg : objMsg
        }
    },

    changeComment: (text, cat) => {
        return {
            type: 'USER_CHANGE_COMMENT',
            comMsg: text,
            cat: cat,
            objMsg : objMsg
        }
    },

    showReturnStrings: (objMsg) => {
        return {
            type: 'SHOW_RETURN_STRINGS',
            serverData: Object.assign(objMsg)
        }
    },

    handleSubmit: () => {
        return (dispatch, getState)=>{

            postJSON().then(function(){
                dispatch(actions.submitComment());
            }, function (error) {
                console.log('The error is' + error);
            })


        }
    },

    handleLoad: () => {
        return (dispatch, getState)=>{
            // setTimeout(()=> {
            //     dispatch(actions.showReturnStrings());
            // },2500);
            getJSON("/api/getComment").then(function(json){
                // console.log('contents:' + json);
                dispatch(actions.showReturnStrings(json));
            }, function(error){
               console.log('The error is' + error);
            })
        }
    }

}


export default actions
