import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #002060;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #002c90;
  }
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
`;

const ReadWebPage = () => {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          const response = await axios.get(proxyUrl + url, {
            responseType: 'text',
            headers: {
              'Content-Type': 'text/html',
            },
          });

          setContent(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [url]);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const readAloud = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const ptBRVoice = voices.find(voice => voice.lang === 'pt-BR');

    if (ptBRVoice) {
      speech.voice = ptBRVoice;
    }

    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  const handleReadAloud = () => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(content, 'text/html');
    const textContent = htmlDocument.documentElement.textContent;

    readAloud(textContent);
  };

  const handleStopReading = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Digite a URL da página da web:
          <Input type="url" value={url} onChange={handleChange} required />
        </Label>
        <Button type="submit">Ler</Button>
      </Form>
      <Button onClick={handleReadAloud}>Ler em voz alta</Button>
      <Button onClick={handleStopReading}>Parar leitura</Button>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default ReadWebPage;