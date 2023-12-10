import { FcLike } from "react-icons/fc";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

function Post(props){

let[likes , Setlikes] = useState(0)
function onClickLikeBtn(){
  Setlikes(likes+1)
  console.log('like')
}

function onClickDeleteBtn(Postid) {

  // Use the filter method to create a new array without the post to be deleted
  let newArray = props.items.filter(post => post.Postid !== Postid);

  // Update the state with the new array
  props.Setitems(newArray);
  console.log(Postid)
}

    return(
        <>
          <div className="card cardstyle" style={{width: "18rem"} }>
            <div className="card-body">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                <button className="btn btn-danger" onClick={ click => onClickDeleteBtn(props.Postid)}><FaRegTrashCan className="delete-icon" /></button>
                {/* <span class="visually-hidden">unread messages</span> */}
              </span>
              <h6 className="card-title">{props.username === '' ? 'Username' : props.username}</h6>
              <h3 className="card-title">{props.headline === '' ? 'Headline' : props.headline}</h3>
              <p className="card-text">{props.PostContent === '' ? 'Content' : props.PostContent}</p>
              <div className="alert alert-success" role="alert">
                This post has got {props.numberOFimpressions === null ? '0' : props.numberOFimpressions} so far!!
              </div>
              {props.tags.map((item , index) => <span key={index} className="badge text-bg-primary tags">{item === '' ? 'empty' : item}</span>)
              }
              <div className="btn btn-light like-icon-container" onClick={onClickLikeBtn}>{likes}<FcLike className="like-icon"  /></div>
            </div>
          </div>
        </>
    )
}

export default Post