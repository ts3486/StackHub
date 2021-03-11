import React, {useState} from "react"; 
import { QuestionFormWrapper } from "./questionFormComponent_style";
import {connect} from "react-redux";

import * as actionTypes_question from "../../store/actions/questionActions"

interface Props{

}

export const QuestionFormComponent: React.FC<Props> = (props: any) => {

    const [question, questionHandler] = useState(""); 

    const addQuestion = () => {
        console.log(question);
        props.addQuestion(question);
        
        //Reset input
        questionHandler("");
    }
    

    return(
        <QuestionFormWrapper>
            <form>
                <label>Ask a question:</label>
                <input type="text" onChange={(e: any) => questionHandler(e.target.value)}></input>
                <button type="button" onClick={addQuestion}>Ask</button>
            </form>
        </QuestionFormWrapper>
    )
}

const mapStateToProps = (state: any) => {
    return{
        questions: state.questions
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addQuestion: (question: string) => dispatch(actionTypes_question.addQuestion(question))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFormComponent);