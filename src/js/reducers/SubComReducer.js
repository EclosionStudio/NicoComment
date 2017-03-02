/**
 * This is for user to submit comment.
 * Created by tokei on 2017/3/1.
 */

function SubComReducer(comMsg=[], action) {
    switch (action.type) {
        case 'USER_SUBMIT_COMMENT':
            return [{
                userComBody: action.userComBody,
                id: comMsg.reduce((maxID, comMsgItem) => {
                    return Math.max(comMsgItem.id, maxID)
                }, -1) + 1,
            }, ...comMsg]
        default:
            return comMsg;
    }

}

export default SubComReducer;