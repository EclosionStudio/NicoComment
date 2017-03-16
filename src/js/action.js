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



let actions = {

    submitComment: (text) => {
        return {
            type: 'USER_SUBMIT_COMMENT',
            comMsg: text,
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
            comMsg: objMsg
        }
    },


    handleLoad: (text) => {
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
