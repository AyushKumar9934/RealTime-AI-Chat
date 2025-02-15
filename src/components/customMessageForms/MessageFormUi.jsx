import {
    PaperAirplaneIcon,
    PaperClipIcon,
    XMarkIcon,
  } from "@heroicons/react/24/solid";
  import React, { useState } from "react";
  import Dropzone from "react-dropzone";
  
  
  const MessageFormUi = ({ 
    setAttachment,
    message,
    handleChange,
    handleSubmit
   }) => {
    const [preview,setPreview]=useState("");
    
    
    
    return (
      <div className="message-form-container">
        {preview && (
          <div className="message-form-preview">
            <img width={"50ps"} height={"auto"}
              alt="message-form-preview"
              src={preview}
              className="message-form-preview-image"
              onLoad={() => URL.revokeObjectURL(preview)}
            />
            <XMarkIcon
              className="message-form-icon-x"
              onClick={() => {
                setPreview("");
                setAttachment("");
              }}
            />
          </div>
        )}
        <div className="message-form">
          {" "}
          <div className="message-form-input-container">
            <input
              className="message-form-input"
              type="text"
              value={message}
              onChange={(e)=>handleChange(e)}
              placeholder="send a message.."
            />
          </div>
          <div className="message-form-icons">
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              noClick={true}
              onDrop={(acceptedFiles) => {
                setAttachment(acceptedFiles[0]);
                setPreview(URL.createObjectURL(acceptedFiles[0]));
              }}
            >
              {({ getRootProps, getInputProps, open }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <PaperClipIcon
                    className="message-form-icon-clip"
                    onClick={open}
                  />
                </div>
              )}
            </Dropzone>
            <hr className="vertical-line" />
            <PaperAirplaneIcon
              className="message-form-icon-airplane"
              onClick={() => {
                setPreview("");
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default MessageFormUi;
  