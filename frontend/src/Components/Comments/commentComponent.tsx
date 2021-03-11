import React from "react"; 
import { CommentWrapper } from "./commentComponent_style";

interface Props{
    comment ?: any,
}

export const CommentComponent: React.FC<Props> = (props: any) => {
    return(
        <CommentWrapper>
            <h1>{props.username}</h1>
            <div>
                {props.comment}
            </div>
        </CommentWrapper>
    )
}

export default CommentComponent;