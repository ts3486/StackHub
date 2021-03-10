import React, {useState} from "react"; 
//curly brackets represent "named imports", where the name of the import is specified. (imports specific module from path)
//no bracket imports the default module, and can be named whatever
import { HomeWrapper } from "./homeComponent_style";
import QuestionComponent from "./questionComponent";
import {connect} from "react-redux";

import * as actionTypes_question from "../../store/actions/questionActions"


interface Props {
    question: any,
}

export const HomeComponent: React.FC<Props> = (props: any) => {

    const [question, questionHandler] = useState(""); 

    const addQuestion = () => {
        console.log(question);
        props.addQuestion(question);
        
        //Reset input
        questionHandler("");
    }
    

    return(
    <HomeWrapper>
        <h1>Stack Hub</h1>
        <div className="questionContainer" >

            {props.questions.map((questionText: any, ) => {
                return <QuestionComponent key={props.questions.indexOf(questionText)} question={questionText}/>
            })}

        </div>

        <form>
            <label>Ask a question:</label>
            <input type="text" onChange={(e: any) => questionHandler(e.target.value)}></input>
            <button type="button" onClick={addQuestion}>Ask</button>
        </form>
    </HomeWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);