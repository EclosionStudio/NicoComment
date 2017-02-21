let CommentBoxActions = {
    addComment: function(text){
        "use strict";
        return {
            type: 'ADD_COMMENT',
            text: text
        }
    }
}

export default CommentBoxActions;