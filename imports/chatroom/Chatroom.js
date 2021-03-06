import React from "react";
import NavBar from "../ui/NavBar";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

export default class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };

    this.appendMessage = this.appendMessage.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  appendMessage(message) {
    this.setState({
      messages: this.state.messages.concat(message)
    });
  }
  handleSend(message) {
    const fullMessage = {
      username: this.props.username,
      message
    };
    const messagesDummy = this.props.messages;
    const myInit = {
      method: "POST",
      body: JSON.stringify(messagesDummy),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const myRequest = new Request("http://localhost:3000/?#", myInit);
    fetch(myRequest)
      .then(() => {
        this.appendMessage(fullMessage);
      })
      .then(() => {
        console.log(this.state.messages);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>Welcome {this.props.username}</div>
        <ChatInput onSend={this.handleSend} />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}
