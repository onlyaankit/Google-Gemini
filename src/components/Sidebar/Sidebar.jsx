import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState, useContext } from "react";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu}
          alt="Menu"
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                className="recent-entry"
                key={index}
              >
                <img src={assets.message} alt="Message" />
                <p>{item.slice(0, 14)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.diamond} alt="Gem Manager" />
          {extended ? <p>Gem Manager</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.question} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.settings} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



// import "./Sidebar.css";
// import { assets } from "../../assets/assets";
// import { useState, useContext } from "react";
// import { Context } from "../../context/context";
// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const [onSent, prevPrompts, setRecentPrompt, newChat] = useContext(Context);

//   const loadPrompt = async (prompt) => {
//     setRecentPrompt(prompt);
//     await onSent(prompt);
//   }
//   return (
//     <div className="sidebar">
//       <div className="top">
//         <img
//           className="menu"
//           onClick={() => setExtended((prev) => !prev)}
//           src={assets.menu}
//           alt=""
//         />

//         <div onClick={() => newChat()} className="new-chat">
//           <img src={assets.plus_icon} alt="" />
//           {extended ? <p>New Chat</p> : null}
//         </div>
//         {extended ? (
//           <div className="recent">
//             <p className="recent-title">Recent</p>
//             {prevPrompts.map((item, index) => {
//               return (
//                 <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
//                   <img src={assets.message} alt="" />
//                   <p>{item.slice(0, 14)}...</p>
//                 </div>
//               );
//             })}
//           </div>
//         ) : null}
//       </div>

//       <div className="bottom">
//         <div className="bottom-item recent-entry">
//           <img src={assets.diamond} alt="" />
//           {extended ? <p>Gem manager</p> : null}
//         </div>

//         <div className="bottom-item recent-entry">
//           <img src={assets.question} alt="" />
//           {extended ? <p>Help</p> : null}
//         </div>

//         <div className="bottom-item recent-entry">
//           <img src={assets.history} alt="" />
//           {extended ? <p>Activity</p> : null}
//         </div>

//         <div className="bottom-item recent-entry">
//           <img src={assets.settings} alt="" />
//           {extended ? <p>Setting</p> : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
