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


let getJSON = function(url){
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

let postJSON = function (objMsg) {
    let promise = new Promise(function(resolve, reject){
        let postUrl = '/api/postComment';
        let client = new XMLHttpRequest();
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.open('POST', postUrl);
        client.setRequestHeader('Content-Type', 'x-www-form-urlencoded');
        let params = JSON.stringify({
            'author':'NicoNicoNi',
            'mailaddr':'1203@qq.com',
            'website':'it is website',
            'comment':'sample comment'
        });
        console.log(params);
        client.send(params);

        function handler(){
            if( this.readyState !==4 ) return;
            if( this.status == 200){
                resolve( this.response );
                console.log('the response has been sent');
                console.log(this.response);
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

    handleSubmit: (objMsg) => {
        return (dispatch, getState)=>{

            postJSON(objMsg).then(function(){
                //console.log(objMsg);
                dispatch(actions.submitComment());
            }, function () {
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
