import React from "react"; 
import {connect} from "react-redux";

import CommentComponent from "./commentComponent";
import CommentFormComponent from "./commentFormComponent";

import { CommentSectionWrapper } from "./commentSectionComponent_style";

interface Props{

}

export const CommentSectionComponent: React.FC<Props> = (props: any) => {
    return(
        <CommentSectionWrapper>
            <div className="commentBox">
                <h1>Comments</h1>
                
                {props.comments.map((commentText: any)=>{
                    return <CommentComponent key={props.comments.indexOf(commentText)} comment={commentText}/>
                })}
                <CommentFormComponent/>
            </div>
             
        </CommentSectionWrapper>
    )
}

const mapStateToProps = (state: any) => {
    return{
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentSectionComponent);
