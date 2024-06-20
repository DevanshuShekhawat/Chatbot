import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Izze-AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello user</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Help me craft a text to respone to a friend</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Create 12-week study plan to learn a new language</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Evaluate and rank common camera categories </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Come up with a complex word riddle with hints</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              {loading ? (
                <div class="loading">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a promt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Izze may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Izze Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
