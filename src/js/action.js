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

    showReturnStrings: () => {
        return {
            type: 'SHOW_RETURN_STRINGS',
            comMsg: objMsg
        }
    },


    handleLoad: (text) => {
        return (dispatch, getState)=>{
            setTimeout(()=> {
                dispatch(actions.showReturnStrings());
            },2500);
        }
    }

}


export default actions

