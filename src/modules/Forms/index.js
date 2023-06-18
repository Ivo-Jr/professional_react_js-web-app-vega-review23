import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import * as S from './styles';
import Login from '../../components/Login/Login.js';

export const Quiz = () => {
  const [nameUsuario, setNameUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [respostas, setRespostas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Adicione o estado isLoggedIn
  const [emailEnviado, setEmailEnviado] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const credentials = {
    client: "COPAJ",
    password: "VR701",
  };

  const perguntas = [
    'Qual é o principal objetivo da automação na máquina de abraçadeiras automática, considerando os objetivos do projeto e os benefícios esperados?',
    'Quais processos ou atividades serão automatizados na máquina de abraçadeiras automática, levando em conta a definição do escopo do projeto? Considerando planilha enviada em 2022, existe a intenção de aplicar outro tipo de item?',
    'Quais funcionalidades e recursos são esperados na aplicação de automação para a máquina de abraçadeiras automática, alinhados aos requisitos do projeto e às necessidades das partes interessadas?',
    'Qual é o orçamento disponível para a automação do projeto da máquina de abraçadeiras automática, considerando a estimativa de custos e a análise de investimento?',
    'Qual é o prazo de entrega do projeto de automação da máquina de abraçadeiras automática, conforme o cronograma do projeto e as restrições de tempo?',
    'Que tipo de hardware será utilizado na automação da máquina de abraçadeiras automática, levando em consideração a qualidade e o gerenciamento de recursos?',
    'A aplicação de automação para a máquina de abraçadeiras automática precisa se integrar com outros sistemas existentes, considerando a análise de riscos e a interdependência entre os sistemas?',
    'Existem requisitos específicos de segurança que devem ser considerados na automação da máquina de abraçadeiras automática, conforme as normas e regulamentações aplicáveis?',
    'A automação da máquina de abraçadeiras automática precisa ser escalável, considerando a capacidade de adaptação a mudanças e o gerenciamento de possíveis restrições futuras?',
    'Há outras exigências ou requisitos que você gostaria de incluir no projeto de automação da máquina de abraçadeiras automática, garantindo a satisfação das partes interessadas e o alinhamento com os objetivos do projeto?',
    'Qual é a capacidade de produção do processo que será automatizado na máquina de abraçadeiras automática, levando em conta a eficiência e a eficácia dos processos de produção?',
    'Quais são as principais métricas de desempenho que você deseja medir com a automação da máquina de abraçadeiras automática, considerando a gestão da qualidade e o monitoramento do progresso do projeto?',
    'Há requisitos específicos de eficiência energética ou sustentabilidade que devem ser levados em consideração no projeto da máquina de abraçadeiras automática, alinhados às práticas de responsabilidade social e ambiental?',
    'A aplicação de automação da máquina de abraçadeiras automática precisa ser capaz de lidar com interrupções ou falhas no processo, considerando a gestão de riscos e a continuidade dos negócios?',
    'Como será realizada a manutenção da aplicação de automação da máquina de abraçadeiras automática, levando em consideração o planejamento e a execução de atividades de manutenção e suporte?',
    'Há requisitos específicos de comunicação que precisam ser considerados na aplicação de automação da máquina de abraçadeiras automática, considerando a gestão das comunicações e a coordenação entre as partes interessadas?',
    'Quais são os principais desafios ou obstáculos que você espera encontrar no processo de automação da máquina de abraçadeiras automática, considerando a identificação e a análise de riscos do projeto?',
    'Qual é o grau de flexibilidade que você precisa da aplicação de automação da máquina de abraçadeiras automática? Será necessário alterar o processo ou adicionar novas funcionalidades no futuro, considerando o gerenciamento de mudanças e a capacidade de adaptação do projeto?',
    'Há alguma restrição de espaço físico para a instalação da automação da máquina de abraçadeiras automática, levando em consideração os requisitos de recursos e as limitações do ambiente de trabalho?',
    'Há alguma legislação ou norma regulamentadora que precise ser levada em consideração no projeto de automação da máquina de abraçadeiras automática, assegurando a conformidade com as leis e regulamentos aplicáveis?',
  ];

  function handleChangeName(e) {
    setNameUsuario(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmailUsuario(e.target.value);
  }

  function handleChangeResposta(e, index) {
    const novasRespostas = [...respostas];
    novasRespostas[index] = e.target.value;
    setRespostas(novasRespostas);
  }

  function proximaPergunta() {
    setPerguntaAtual(perguntaAtual + 1);
  }

  function enviarRespostas() {
    // Crie um objeto combinando perguntas e respostas
    const perguntasERespostas = perguntas.map((pergunta, index) => {
      return {
        pergunta: pergunta,
        resposta: respostas[index],
      };
    });

    // Converta o objeto em uma string formatada
    const perguntasERespostasString = perguntasERespostas
      .map((item) => `${item.pergunta}\n${item.resposta}\n\n`)
      .join('');

    const templateParams = {
      name: nameUsuario,
      from_email: emailUsuario,
      respostas: perguntasERespostasString,
    };



    emailjs.send('service_5rcnk4b', 'template_n9jcbbr', templateParams, 'jejqf22vllpv8NSLH')
      .then(() => {
        // alert('Respostas enviadas com sucesso!');
        setEmailEnviado(true); // Adicione esta linha
      })
      .catch(() => {
        alert('Ocorreu um erro ao enviar as respostas. Tente novamente mais tarde.');
      });

  }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} credentials={credentials} />
      ) : (
        <S.Container>
          {emailEnviado ? (
            <S.ThankYouMessage>
              <h2>Obrigado por responder ao questionário!</h2>
              <p>Seu e-mail foi enviado com sucesso.</p>
            </S.ThankYouMessage>
          ) : (
            <>
              {perguntaAtual === 0 && (
                <S.Form>
                  <h1>Seja bem vindo ao Projeto VR701 - Máq. Abraçadeiras COPAJ!</h1>
                  <h2>A seguir, questionário de requisitos gerais do projeto.</h2>
                  <h3>É importante que cada stackholder pontue a sua visão sobre os requisitos da aplicação. Portanto sinta-se a vontade para pontuar sobre as perguntas.
                    <br />
                    Ao final, o questionário será enviado e discutiremos na próxima reunião do projeto.</h3>
                  <h3>
                    Insira seu nome:
                    <input
                      type="name"
                      value={nameUsuario}
                      onChange={handleChangeName}
                      required
                    />
                  </h3>
                  <h3>
                    Insira seu e-mail:
                    <input
                      type="email"
                      value={emailUsuario}
                      onChange={handleChangeEmail}
                      required
                    />
                  </h3>
                  <button onClick={proximaPergunta}>Iniciar questionário</button>
                </S.Form>
              )}
              {perguntaAtual > 0 && perguntaAtual <= perguntas.length && (
                <S.Form>
                  <h1>Projeto VR701 - Máq. Abraçadeiras COPAJ</h1>
                  <h2>{perguntas[perguntaAtual - 1]}</h2>
                  <input
                    type="text"
                    value={respostas[perguntaAtual - 1] || ''}
                    onChange={(e) => handleChangeResposta(e, perguntaAtual - 1)}
                    required
                  />
                  {perguntaAtual < perguntas.length ? (
                    <button onClick={proximaPergunta}>Próxima pergunta</button>
                  ) : (
                    <button onClick={enviarRespostas}>Enviar respostas</button>
                  )}
                </S.Form>
              )}
            </>
          )}
        </S.Container>
      )}
    </>
  );

}