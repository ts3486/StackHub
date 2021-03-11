import React from "react"; 
import { QuestionPageWrapper } from "./questionPageComponent_style";
import {connect} from "react-redux";
import {useParams} from "react-router";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from "@syncfusion/ej2-react-schedule";

//Components
import CommentSectionComponent from "../Comments/commentSectionComponent";


interface Props {
    question ?: any,
}

export const QuestionComponent: React.FC<Props> = (props: any) => {

    let {questionTitle} = useParams<any>();


    return(
    <QuestionPageWrapper>
        <div className="questionBox">
            <h1>{questionTitle}</h1>
            <div className="description">
                Here`s my source code. 
                <div className="username">Username</div>
            </div>
        </div>

        <div className="timeslotBox">
            <h1>I`m hoping to get help on these timeslots</h1>
            <div className="timetable">Timetable</div>
            <ScheduleComponent height="500px"><Inject services={[Day, Week, WorkWeek, Month, Agenda]}/></ScheduleComponent> 
        </div>

        <CommentSectionComponent/>
    </QuestionPageWrapper>
    )
}

const mapStateToProps = (state: any) => {
    return{
        questions: state.questions
    }
}

export default connect(mapStateToProps)(QuestionComponent);
