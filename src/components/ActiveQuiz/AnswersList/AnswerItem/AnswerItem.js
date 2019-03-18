import React from "react";
import "./AnswerItem.css";

const AnswerItem = props => {
  const cls = ['AnswerItem']

  if (props.state) {
    cls.push(props.state)
  }
  // console.log(cls)
  // console.log(props)
  return (
    <li 
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
    {props.answer.text}
    </li>    
  )
};

export default AnswerItem;
