import React, {useState} from "react";
import ReactQuill from 'react-quill';
import {connect} from "react-redux";


//Components

//Actions
import * as actionTypes_question from "../../store/actions/questionActions"
//Style
import {QuestionPostPageWrapper} from "./questionPostPageComponent_style";


export const QuestionPostPageComponent: React.FC = (props:any) => {

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
     
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    const [questionTitle, questionTitleHandler] = useState("");
    const [questionContent, questionContentHandler] = useState("");

    
    const addQuestion = () => {

        // const questionData: any = new FormData();

        // // questionData.append("username", username);
        // questionData.append("title", questionTitle);
        // questionData.append("content", questionContent);

        const questionData = {
            title: questionTitle,
            content: questionContent,
        }

        props.addQuestion(questionData);

    };

    return(
        <QuestionPostPageWrapper>
            <div className="container">
                <h1>Post a question</h1>

                <h5>Title:</h5>
                <input type="text" value={questionTitle} onChange={(e:any) => {questionTitleHandler(e.target.value)}}/>
                <ReactQuill 
                    theme="snow" modules={modules}
                    formats={formats} value={questionContent} 
                    onChange={questionContentHandler}
                />

                <button className="postButton" type="button" onClick={addQuestion}>Post Question</button>
            </div>
        </QuestionPostPageWrapper>
    );
}

const mapStateToProps = (state: any) => {
    return{
        questions: state.questions
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addQuestion: (questionData: any) => dispatch(actionTypes_question.addQuestion(questionData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPostPageComponent);