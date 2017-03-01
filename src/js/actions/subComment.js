/**
 * sub Comment
 * Created by tokei on 2017/3/1.
 */

let subComment = {
    // plain javascript object
    type: 'SUBMIT_COMMENT',
    func: function(commentTextObj){

        return {
            userName: commentTextObj.userName,
            userMail: commentTextObj.userMail,
            userWebsite: commentTextObj.userWebsite,
            userComBody:  commentTextObj.userComBody,
        }

    }


}

export default subComment;