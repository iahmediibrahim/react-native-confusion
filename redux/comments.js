import * as ActionTypes from './ActionTypes';
export const comments = (
    state = {
        errMess: null,
        comments: [],
    },
    action,
) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload, comments: [] };
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length + 1;
            return { ...state, errMess: null, comments: [ ...state.comments, comment ] };
        default:
            return state;
    }
};
