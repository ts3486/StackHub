import React from "react"; 
import {connect} from "react-redux";
//curly brackets represent "named imports", where the name of the import is specified. (imports specific module from path)
//no bracket imports the default module, and can be named whatever
//Components
import QuestionComponent from "../Questions/questionComponent";
//Style
import { HomeWrapper } from "./homeComponent_style";
//Actions
// import * as actionTypes_question from "../../store/actions/questionActions"


interface Props {
    question: any,
}

export const HomeComponent: React.FC<Props> = (props: any) => {


    return(
    <HomeWrapper>
        <div className="pageContainer">
            <h1>Stack Hub</h1>
            <div className="questionContainer" >

                {props.questions.map((questionText: any ) => {
                    return <QuestionComponent key={props.questions.indexOf(questionText)} question={questionText}/>
                })}

                <button onClick={() => window.location.href = "/post"}>Post a question</button>
            </div>
        </div>
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
        // addQuestion: (question: string) => dispatch(actionTypes_question.addQuestion(question))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);