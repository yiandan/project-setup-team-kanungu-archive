import React, { useState, useRef } from "react";
import cn from "classnames";
import useDynamicHeightField from "./useDynamicHeightField";
import "./CommentBox.css";
import axios from 'axios'
const INITIAL_HEIGHT = 46;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */

const CommentBox = (props) =>{
  
  console.log(props)
 
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [userPic,setUserPic] = useState(props.data.author.profileImage)

  
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);
 
  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios({url:`http://localhost:5000/post/${props.id}/comment`,method:'POST',data:{_id:props.id,text:commentValue,date:Date().toLocaleString()}})
            .then(props.OnChildClick({"_id":"nothing","by":{"_id":props.data.author._id, "username":props.data.author.username},text:commentValue,posted:Date().toLocaleString()}))
            .catch((err) => {
                console.error(err)
                
            })
    
    console.log("send the form data somewhere");
  };

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <div className="header">
          <div className="user">
            <img
              src={userPic}
              alt="User avatar"
              className = 'avi'
            />
            <span>{props.data.author.username}</span>
          </div>
        </div>
        <label htmlFor="comment">Leave a Comment!</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="Leave a comment!"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Respond
          </button>
        </div>
      </form>
    </div>
  );
}
export default CommentBox