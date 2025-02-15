import React, { useState } from 'react'
import MessageFormUi from './MessageFormUi';
import { usePostAiTextMutation } from '@/states/api';

const Ai = ({props,activeChat}) => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [trigger]=usePostAiTextMutation();
  
    const handleChange = (e) => setMessage(e.target.value);
    const handleSubmit = async () => {
      const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(900)}+00:00`);
      const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
      const form = {
        attachments: at,
        created: date,
        sender_username: props.username,
        text: message,
        activeChatId: activeChat.id,
      };
      console.log("props.onsubmit is ", props.onSubmit);
      props.onSubmit(form);
      trigger(form);
  
      setMessage("");
      setAttachment("");};
  return (

    <MessageFormUi

    setAttachment={setAttachment}
    message={message}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />
  )

}

export default Ai