
import './App.css';
import OptionSelection from "./component/OptionSelection";
function App(){
  return(
  <div className="App">
    <OptionSelection/>
  </div>

);
  }
export default App;


/*import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import {sendMsgToOpenAI} from './openai';
import {useState} from'react';
import {useRef} from 'react';


function App() {
const [input,setInput]=useState("");

const handleSend = async  () =>{
  const res =  await sendMsgToOpenAI(input);
  console.log(res);
}

    return ( 
      <div className = "App">
     <div className = "sideBar">
     <div className="upperSide">
    <div className="upperSideTop"> <img src={gptLogo} alt="Logo" className="logo"/> <span className="brand"> ChatGPT </span> </div>
    <button className="midBtn" onClick={()=>{window.location.reload()}}><img src={addBtn} alt ="newchat " className="addBtn"/>new Chat</button>
     <div className="upperSideBottom">

  <button className="query" ><img src={msgIcon} alt="Query"/> What is programming ?</button>
  <button className="query" ><img src={msgIcon} alt="Query"/> How to use an API?</button>
 </div>
  </div>
  <div className="lowerSide">
    <div className="listItems"><img src={home} alt="Home" className="listitemsImg" />Home</div>
    <div className="listItems"><img src={saved} alt="Saved" className="listitemsImg" />Save</div>
    <div className="listItems"><img src={rocket} alt="Rocket" className="listitemsImg" />upgrade to pro</div>
  </div>
  </div>

<div className="main">
   <div className="chats">
    <div className="chat">
      <img classNmae="chatImg" src={userIcon} alt=" "/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio ullam illo ratione officiis nisi quis unde, debitis vitae, officia, culpa reiciendis. Ratione vel maxime eum, provident adipisci totam doloribus.</p>
    </div>

    <div className="chat bot">
      <img classname="chatImg" src={gptImgLogo} alt=" "/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio ullam illo ratione officiis nisi quis unde, debitis vitae, officia, culpa reiciendis. Ratione vel maxime eum, provident adipisci totam doloribus.</p>
    </div>



</div>
<div className="chatFooter">
  <div className="inp">
    <input type = "text" placeholder='send a message' value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onCLick={handleSend}><img src={sendBtn} alt="Send"/></button>
  </div>
  <p> chatgpt may produce inaccurate information about peoeple, places, or facts, chatgpt again</p>
</div>
</div>
</div>


    );
}

export default App;

*/
