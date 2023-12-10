import Post from "./Post";

function Postcontainer(props){

    function onClickdeleteAll(){
        props.Setitems('')
    }
    return(
        <div className="post-container-box">
            
            <div className="post-container">
                {props.items.map((item , index) => <Post key={index} username={item.username} Postid={item.Postid} headline={item.headline} PostContent={item.PostContent} numberOFimpressions={item.numberOFimpressions} Interaction={item.Interaction} tags={item.tagsArr} items={props.items} Setitems={props.Setitems}/>)}
            </div>
            <div className="delete-all-container" onClick={onClickdeleteAll}>
                <button className="btn btn-danger">DELETE ALL POSTS</button>
            </div>
        </div>
    )
}

export default Postcontainer