/**
 * Actions define in this file.
 * Created by tokei on 2017/3/1.
 */

let actions = {

    submitComment: (text) => {
        return {
            type: 'USER_SUBMIT_COMMENT',
            comMsg: text,
        }
    },

    changeComment: (text) => {
        return {
            type: 'USER_CHANGE_COMMENT',
            comMsg: text
        }
    }




}


export default actions

