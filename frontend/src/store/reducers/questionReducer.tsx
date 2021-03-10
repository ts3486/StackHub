import * as actionTypes from "../actions/questionActions";


const initialState = {
    questions: ["How to print","How to map","How to deploy"],
}

const questionsReducer = (state: any = initialState, action: any) => {

    switch(action.type){
        case actionTypes.ADD_QUESTION:
            return{
              ...state,
              questions: state.questions.concat(action.question),
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