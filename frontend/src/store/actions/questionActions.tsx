import axios from "axios";

export const AWAIT_DATA = "AWAIT_DATA";
export const DECREMENT = "DECREMENT";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_COMMENT = "ADD_COMMENT";

export const addQuestion = (questionData: any) => {
    return (dispatch: any) => {
        axios.post("http://localhost:5000/questions/post", questionData).then((res: any) => dispatch({
            type: ADD_QUESTION,
            //send user and token data
            question: questionData,
        })).then(() => console.log("Question added", questionData));
    };
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
