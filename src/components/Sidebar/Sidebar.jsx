import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompt, onSent, setRecentPrompt, setInput,newChat } = useContext(Context);

  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt);
  }

  const handleRecentClick = (prompt) => {
    setRecentPrompt(prompt);
    setInput(prompt);
    onSent();
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="" />
        <div className="new-chat" onClick={() => { newChat()
        }}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => (
              <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
