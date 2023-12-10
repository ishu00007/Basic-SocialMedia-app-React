import { useRef, useState } from "react"
import Header from "./Components/Header"
import Sidebar from './Components/Sidebar'
import './styles/App.css'
import Footer from "./Components/Footer"
import Createpost from "./Components/Createpost"
import DefaultMessage from "./Components/DefaultMessage"
import Postcontainer from "./Components/Postcontainer"
function App() {

  let [sidebarSection , SetsidebarSection] = useState('Home')
  let username = useRef('')
  let headline = useRef('')
  let PostContent = useRef('')
  let numberOFimpressions = useRef(0)
  let Interaction = useRef('')
  let tags = useRef([])

    let [items , Setitems] = useState([])
    let id = useRef(0)
  function handleNewItems(usernameValue , headlineValue , PostContentValue , numberOFimpressionsValue , InteractionValue , tagsArray){
    let newArray = [...items , {username:usernameValue , headline:headlineValue , PostContent:PostContentValue , numberOFimpressions:numberOFimpressionsValue , Interaction:InteractionValue , tagsArr:tagsArray , Postid:id.current}]
     Setitems(newArray)
  }
 

  return (
    <div className="App-container">
    <div className="sidebar-home-createPost-container">
      <Sidebar sidebarSection={sidebarSection}  SetsidebarSection={SetsidebarSection}/>
      <div className="content">
        <Header/>
        {sidebarSection === 'Home' && (items.length === 0 ? <DefaultMessage /> : <Postcontainer items={items} username={username} headline={headline} PostContent={PostContent} numberOFimpressions={numberOFimpressions} Interaction={Interaction} tags={tags} Setitems={Setitems}/>)}



        {sidebarSection=== 'Create Post' && <Createpost username={username} headline={headline} PostContent={PostContent} numberOFimpressions={numberOFimpressions} Interaction={Interaction} handleNewItems={handleNewItems} tags={tags} Postid={id}/>}
      </div>
      
      
    </div>
    <Footer/>
    </div>
  )
}

export default App
