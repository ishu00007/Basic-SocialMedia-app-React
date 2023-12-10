function Createpost(props){
  function onClickPost(){

    let tagsArray = props.tags.current.value.split(' ')
    let usernameValue = props.username.current.value
    let headlineValue = props.headline.current.value
    let PostContentValue = props.PostContent.current.value
    let numberOFimpressionsValue = props.numberOFimpressions.current.value  
    let InteractionValue = props.Interaction.current.value 

    props.handleNewItems(usernameValue , headlineValue , PostContentValue , numberOFimpressionsValue , InteractionValue , tagsArray)

    props.Postid.current+=1
    props.username.current.value = ''
    props.headline.current.value = ''
    props.PostContent.current.value = ''
    props.numberOFimpressions.current.value = ''
    props.tags.current.value = ''
    
  }
    return(
        <>
           <form className="row g-3 create-post">

              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label" >Username</label>
                <input type="text" className="form-control" id="inputEmail4" ref={props.username}/>
              </div>

             

              <div className="col-12">
                {/* <label htmlFor="inputAddress" className="form-label">Heaadline</label> */}
                <input type="text" className="form-control" id="inputAddress" placeholder="Headline" ref={props.headline}/>
              </div>

              <div className="col-12">
                {/* <label htmlFor="inputAddress2" className="form-label">Post Content</label> */}
                <input type="text" className="form-control" id="inputAddress2" placeholder="Post Content" ref={props.PostContent}/>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Number of Impressions</label>
                <input type="Number" className="form-control" id="inputCity" ref={props.numberOFimpressions}/>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label" >Tags</label>
                <input type="text" className="form-control" id="inputPassword4" ref={props.tags}/>
              </div>

              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Interaction ON/OFF</label>
                <select id="inputState" className="form-select" ref={props.Interaction} defaultValue={'Likeable'}>
                  <option selected>Choose...</option>
                  <option value={'Likeable'}>Likeable</option>
                  <option value={'NON-likeable'}>NON-Likeable</option> 
                </select>
              </div>

              
              <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={onClickPost}>Post</button>
              </div>

          </form>
        </>
    )
}

export default Createpost