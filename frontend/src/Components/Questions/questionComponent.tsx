import React from "react"; 
import { QuestionWrapper } from "./questionComponent_style";
// import {connect} from "react-redux";


interface Props {
    question ?: any,
}



export const QuestionComponent: React.FC<Props> = (props: any) => {


    return(
    <QuestionWrapper>
        <div className="questionBox" onClick={() => window.location.href = "/question/" + props.question}>
            <h1>{props.question}</h1>
        </div>
    </QuestionWrapper>
    )
}

// const mapStateToProps = (state: any) => {
//     return{
//         question: state.questions
//     }
// }

export default (QuestionComponent);