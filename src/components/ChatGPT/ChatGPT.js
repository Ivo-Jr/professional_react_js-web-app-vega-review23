import React from 'react';
import { Widget as Chat, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import styled from 'styled-components';
//Hello World;

const StyledChat = styled(Chat)`
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);

  .rcw-header {
    background-color: #F55E34;
    border-radius: 10px 10px 0 0;
  }

  .rcw-launcher {
    background-color: #F55E34;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    box-shadow: none;
  }

  .rcw-launcher-inner {
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
  }

  .rcw-message-text {
    background-color: #F7F7F7;
    color: #2E2E2E;
    font-size: 1.1rem;
    border-radius: 10px;
    padding: 10px 20px;
  }

  .rcw-message-text img {
    max-width: 100%;
    height: auto;
  }

  .rcw-new-message {
    background-color: #F55E34;
    color: white;
    border-radius: 10px;
    font-size: 1.1rem;
    padding: 10px 20px;
  }

  .rcw-sender {
    color: #6B6B6B;
    font-size: 0.9rem;
    margin-top: 5px;
  }

  .rcw-sender .rcw-timestamp {
    margin-left: 10px;
  }
`;

function ChatGPT() {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  async function sendMessageToOpenAI(message) {
    console.log('sendMessageToOpenAI chamada');
    try {
      console.log('API Key:', API_KEY);
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 60,
          n: 1,
          stop: '\n',
          temperature: 0.7
        })
      });
  
      const data = await response.json();
  
      // Verifique se a resposta contém os dados esperados antes de acessá-los
      if (data.choices && data.choices.length > 0 && data.choices[0].text) {
        const text = data.choices[0].text.trim();
        console.log(`Resposta do OpenAI: ${text}`);
        addResponseMessage(text);
      } else {
        console.log('Resposta inesperada da API:', data);
      }      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <StyledChat
        title="Chat com a VEGA Robotics"
        subtitle="Digite sua mensagem e pressione Enter"
        senderPlaceHolder="Digite sua mensagem aqui..."
        handleNewUserMessage={(message) => {
          console.log(`Nova mensagem recebida: ${message}`);
          sendMessageToOpenAI(message);
        }}
      />
    </div>
  );
  
}

export default ChatGPT;