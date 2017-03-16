/**
 * This is for user to submit comment.
 * Created by tokei on 2017/3/1.
 */
//let objMsg = {
//    userName: 0,
//    userEmail: 0,
//    userWebsite: 0,
//    userComBody: 0
//};
function SubComReducer(comMsg=[], action) {

    switch (action.type) {
        case 'USER_SUBMIT_COMMENT':

            return ([Object.assign({
                id: comMsg.reduce((maxID, comMsgItem) => {
                    return Math.max(comMsgItem.id, maxID)
                }, -1) + 1,
            }, action.objMsg), ...comMsg]);

        case 'USER_CHANGE_COMMENT':
            let objMsg = action.objMsg;
            switch (action.cat){
                case 'userComBody':
                    objMsg.userComBody = action.comMsg;
                    //console.log(objMsg);
                    break;
                case 'userName':
                    objMsg.userName = action.comMsg;
                    //console.log(objMsg);
                    break;
                case 'userWebsite':
                    objMsg.userWebsite = action.comMsg;
                    //console.log(objMsg);
                    break;
                case 'userEmail':
                    objMsg.userEmail = action.comMsg;
                    //console.log(objMsg);
                    break;
                default:
                    console.log('没有输入');
            }

            if(objMsg.userName && objMsg.userEmail && objMsg.userWebsite && objMsg.userComBody){
                console.log('可以提交');
            }

            return comMsg;
        default:
            return comMsg;
    }

}



export default SubComReducer;
