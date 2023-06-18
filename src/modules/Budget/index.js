import React, { useState } from 'react';
import * as S from './styles';
import emailjs from '@emailjs/browser';

export const Budget = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [select, setSelect] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      select: select,
      message: message,
      email: email,
    };

    emailjs
      //   .send("service_0em9x43", "template_t0fkzdn", templateParams, "jejqf22vllpv8NSLH")
      .send('service_8o40684', 'template_1klawvb', templateParams, 'jejqf22vllpv8NSLH')
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          setSelect('');
          alert('E-mail enviado com sucesso!');
        },
        (err) => {
          console.log('ERRO: ', err);
        }
      );
  }

  return (
    <S.Container>
      <S.Content>
        <S.Text>Faça um Orçamento</S.Text>
        <S.Form onSubmit={sendEmail}>
          <input
            className="input"
            type="latin-prose"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="input"
            type="email"
            placeholder="Digite seu e-mail"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <select
            name="select"
            onChange={(e) => setMessage(e.target.value)}
          // value={select} 
          >
            <option value="Tenho interesse em Estampos Progressivo">Estampos Progressivos</option>
            <option value="Tenho interesse em Estampos">Estampos Individuais</option>
            {/* <option value="Tenho interesse em Máquinas de Solda">Máquinas dede Solda Resistencia</option> */}
            <option value="Tenho interesse em Máquinas de Montagem">Maquinas de Montagem</option>
            <option value="Tenho interesse em Máquinas Especiais">Máquinas Especiais</option>
            <option value="Tenho interesse em Dispositivos de Solda Resistência">Dispositivos de Solda Resistência</option>
            <option value="Tenho interesse em Dispositivos de Solda MIG">Dispositivos de Solda MIGe</option>
            <option value="Tenho interesse em Aplicações WEB">Aplicações WEB</option>
            <option value="Tenho interesse em Aplicações Mobile">Aplicações Mobile</option>
            <option value="Tenho interesse em Automações de Sistemas">Automações de Sistemas</option>
            <option value="Tenho interesse em Integração de Sistemas">Integração de Sistemas</option>
            <option value="Tenho interesse em Integração Robótica">Integração Robótica</option>
            <option value="Tenho interesse em Integração Robótica">Soluções 4.0</option>
          </select>
          <textarea
            placeholder="Detalhe sua solicitação..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className="button"
            type="submit"
            value="Enviar">Enviar</button>

        </S.Form>
      </S.Content>
    </S.Container>
  );
}
