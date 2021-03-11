export const AWAIT_DATA = "AWAIT_DATA";
export const DECREMENT = "DECREMENT";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_COMMENT = "ADD_COMMENT";

export const addQuestion = (question: String) => {
    return {
        type: ADD_QUESTION,
        question: question
    }
}

export const addComment = (comment: String) => {
    return {
        type: ADD_COMMENT,
        comment: comment
    }
}







export const awaitData = () => {
    return {
        type: AWAIT_DATA,
    }
}
