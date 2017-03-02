/**
 * Actions define in this file.
 * Created by tokei on 2017/3/1.
 */

let actions = {

    submitComment: (comBody) => {
        return {
            type: 'USER_SUBMIT_COMMENT',
            userComBody: comBody,
        }
    }




}


export default actions

