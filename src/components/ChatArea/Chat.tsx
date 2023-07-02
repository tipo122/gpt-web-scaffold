import React, { useState } from 'react';
import { Input, Button } from 'antd';
import ChatList from './ChatList';
import { useChatCompletion } from '../../hooks/useChatCompletion';
import './Chat.css';

interface ChatProps {
  children?: React.ReactElement;
}
const { TextArea } = Input;

const Chat = (props: ChatProps) => {
  const { messages, submitPrompt } = useChatCompletion({
    model: 'gpt-3.5-turbo',
    apiKey: process.env.REACT_APP_OPENAI_API_KEY ? process.env.REACT_APP_OPENAI_API_KEY : '',
    temperature: 0.9,
  });
  const [prompt, setPrompt] = useState<string>('');
  const handleClick = () => {
    submitPrompt([{ content: prompt, role: 'user' }]);
    setPrompt('');
  };

  return (
    <div className="chat-body-div">
      <ChatList />
      {messages.length < 1 ? (
        <div className="empty">No messages</div>
      ) : (
        messages.map((msg, i) => <div>{msg.content}</div>)
      )}
      <div className="chat-textarea-div">
        <TextArea
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <Button onClick={handleClick} className="chat-button">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Chat;
