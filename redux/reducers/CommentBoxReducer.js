let CommentBoxReducer = function (info = [], action) {

    switch (action.type) {

        case 'ADD_COMMENT':

            return ({
                userEmail: action.userEmail,
                userName: action.userName,
                website: action.website
            });

        default:
            return info;

    }
};

export default CommentBoxReducer;