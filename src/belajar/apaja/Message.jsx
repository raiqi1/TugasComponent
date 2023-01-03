import React from "react";

class Message extends React.Component {
    render(){
      return(
        <div>
          <small>{this.props.sender}:</small>
          <p>{this.props.content}</p>
          <hr/>
        </div>
      );
    }
  }
  
  // menggunakan komponen
  let chat = (
    <div>
    <Message sender="dian" content="Hi, Apa kabar?" />
    <Message sender="petanikode" content="Kabar Baik" />
    </div>
  );

  export default Message