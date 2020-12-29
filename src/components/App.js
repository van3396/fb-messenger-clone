import { FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../css-components/App.css";
import db from "../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  //useState = vairable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // <-- this is  a listener inside of useEffect(which is also a listener)
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here
    // if its blank inside [](dependecies), this code runs ONCE when the app component loads
    // if we have a variable like [input], it runs every time input changes
    // const userName = prompt("Please eneter your");
    setUserName(prompt("Please enter your name"));
  }, []); //condition

  const sendMessage = (e) => {
    //all the logic to send a message goes here
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //<-- this is using firebase's local timezone
    });
    setInput("");
  };

  // console.log('input: ', input)
  // console.log("set messages: ", messages);
  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1> facebook messenger clone</h1>
      <h2> Welcome {userName}!</h2>

      <form className="app_form">
        <FormControl className="app_formControl">
          {/* <InputLabel>Enter a message...</InputLabel> */}
          <Input
            className="app_input"
            placeholder="Enter text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app_iconButton"
            type="submit"
            disabled={!input}
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          {/* <Button
            type="submit"
            disabled={!input}
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            send message
          </Button> */}
        </FormControl>

        {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
        {/* <Button
          type="submit"
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={sendMessage}
        >
          send message
        </Button> */}
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} userName={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
