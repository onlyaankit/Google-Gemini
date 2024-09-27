// import { createContext, useState } from "react";
// import runChat from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState([]);

//   const delayPara = (index, nextWord) => {
//     setTimeout(() => {
//       setResultData((prev) => prev + nextWord);
//     }, 75 * index);
//   };

//   const newChat = () => {
//     setLoading(false);
//     setShowResult(false);
//     setResultData("");
//     setInput("");
//   };

//   const onSent = async (prompt) => {
//     setResultData("");
//     setLoading(true);
//     setShowResult(true);
//     let response;

//     if (prompt !== undefined) {
//       response = await runChat(prompt);
//       setRecentPrompt(prompt);
//     } else {
//       setPrevPrompts((prev) => [...prev, input]);
//       setRecentPrompt(input);
//       response = await runChat(input);
//     }

//     let responseArray = response.split("**");
//     let formattedResponse = responseArray.map((text, index) => 
//       index % 2 === 1 ? `<b>${text}</b>` : text
//     ).join("");

//     let newResponse = formattedResponse.split("*").join("<br/>");
//     let wordsArray = newResponse.split(" ");
    
//     wordsArray.forEach((word, i) => delayPara(i, word + " "));

//     setLoading(false);
//     setInput("");
//   };

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setInput,
//     input,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     newChat,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;


import { createContext, useState } from "react";
import runChat from "../config/gemini";
// import { preview } from "vite";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    // const response = await runChat(input);
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br/>");
    let newResponse3 = newResponse2.split(" ");
    for (let i = 0; i < newResponse3.length; i++) {
      const nextWord = newResponse3[i];
      delayPara(i, nextWord + " ");
    }
    // setResultData(newResponse);
    setLoading(false);
    setInput("");
  };

  //   onSent("what is React");

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setInput,
    input,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    newChat,
  };

  return (
    // eslint-disable-next-line react/prop-types
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
