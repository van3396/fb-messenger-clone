import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "../css-components/Message.css";

function Message({ userName, message }) {
  const isUser = userName === message.userName;

  return (
    <div className={`message_card ${isUser && "message_user"}`}>
      {/*if this is true, then "message_user"*/}
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.userName}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
