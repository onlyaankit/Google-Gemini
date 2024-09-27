import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Ankit</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Provide a list of questions to help me prepare for a social
                  media manager job interview.
                </p>
                <img src={assets.compass} alt="" />
              </div>

              <div className="card">
                <p>
                  I want to eat more leafy greens and fruits with vitamin C.{" "}
                </p>
                <img src={assets.idea} alt="" />
              </div>

              <div className="card">
                <p>
                  Quiz me on sports trivia, focusing on primarily American
                  sports
                </p>
                <img src={assets.message} alt="" />
              </div>

              <div className="card">
                <p> Give me ideas for how I can use its elements creatively?</p>
                <img src={assets.programming} alt="" />
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
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
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
              type="text"
              placeholder="Enter your prompt here"
            />
            <div className="prompt-img">
              <img src={assets.photo} alt="" />
              <img src={assets.microphone} alt="" />
              {input? <img
                onClick={() => onSent(input)}
                src={assets.paper_plane}
                alt=""
              /> : null}
              
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
