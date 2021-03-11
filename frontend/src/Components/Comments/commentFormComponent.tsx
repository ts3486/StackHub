import React, {useState} from "react"; 
import { CommentFormWrapper } from "./commentFormComponent_style";
import {connect} from "react-redux";

import * as actionTypes_question from "../../store/actions/questionActions"

interface Props{

}

export const CommentFormComponent: React.FC<Props> = (props: any) => {

    const [comment, commentHandler] = useState(""); 

    const addComment = () => {
        console.log(comment);
        props.addComment(comment);
        
        //Reset input
        commentHandler("");
    }
    

    return(
        <CommentFormWrapper>
            <form>
                <label>Add Comment:</label>
                <input type="text" onChange={(e: any) => commentHandler(e.target.value)}></input>
                <button type="button" onClick={addComment}>comment</button>
            </form>
        </CommentFormWrapper>
    )
}

const mapStateToProps = (state: any) => {
    return{
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addComment: (comment: string) => dispatch(actionTypes_question.addComment(comment))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormComponent);