/**
 *
 * Created by tokei on 2017/3/1.
 */

let createCommentList = {
    type: 'CREATE_COMMENT_LIST',
    func: function(commentTextObj){

        return {
            userName: commentTextObj.userName,
            userMail: commentTextObj.userMail,
            userWebsite: commentTextObj.userWebsite,
            userComBody:  commentTextObj.userComBody,
        }

    }
}