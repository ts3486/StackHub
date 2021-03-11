import * as actionTypes from "../actions/questionActions";


const initialState = {
    questions: ["How to solve AI homework","How to map","How to deploy"],
    comments: ["Ah I can do this time", "How about 3:00AM", "No, I can do better"],
}

const questionsReducer = (state: any = initialState, action: any) => {

    switch(action.type){
        case actionTypes.ADD_QUESTION:
            return{
                ...state,
                questions: state.questions.concat(action.question),
            };

        case actionTypes.ADD_COMMENT:
            return{
                ...state,
                comments: state.comments.concat(action.comment),
            };

        // case actionTypes.ON_MOUNT:
        //     return {
        //         //use the ... spread operator to spread and copy the current state
        //         ...state,
        //         //to update an array, use concat to 
        //         posts: state.posts.concat(action.posts),
        //     };
            
    } 

    return state;
}

export default questionsReducer;