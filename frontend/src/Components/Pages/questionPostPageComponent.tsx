import React from "react";

import QuestionFormComponent from "../Questions/questionFormComponent";

import {QuestionPostPageWrapper} from "./questionPostPageComponent_style";

export const QuestionPostPageComponent: React.FC = (props:any) => {
    return(
        <QuestionPostPageWrapper>
            <QuestionFormComponent/>
        </QuestionPostPageWrapper>
    );
}

export default QuestionPostPageComponent;