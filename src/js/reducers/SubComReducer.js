/**
 * This is for user to submit comment.
 * Created by tokei on 2017/3/1.
 */

function SubComReducer(comMsg=[], action) {
    switch (action.type) {
        case 'SUBMIT_COMMENT':
            return comMsg;
        case 'CREATE_COMMENT_LIST':
            return [{
                id: comMsg.reduce((maxID, comMsgItem) => {
                    return Math.max(comMsgItem.id, maxID)
                }, -1) + 1,
                text: action.text,
            }, ...comMsg]
        default:
            return comMsg;
    }

}

export default SubComReducer;