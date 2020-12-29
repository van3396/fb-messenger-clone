import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "../css-components/Message.css";

const Message = forwardRef(({ userName, message }, ref) => {
  const isUser = userName === message.userName;

  return (
    <div ref={ref} className={`message_card ${isUser && "message_user"}`}>
      {/*if this is true, then "message_user"*/}
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.userName || "Unknown User"}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
