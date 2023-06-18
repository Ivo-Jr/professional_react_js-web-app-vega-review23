// OnlineStatus.js
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const OnlineStatus = () => {
  // Estado para armazenar a mensagem que será exibida
  const [message, setMessage] = useState("Estamos Online!");

  useEffect(() => {
    // Função que atualiza a mensagem de acordo com o horário e o dia da semana
    const updateMessage = () => {
      const currentTime = moment().tz("America/Sao_Paulo"); // Configurar o fuso horário de Brasília
      const currentHour = currentTime.hour();
      const currentDay = currentTime.weekday(); // 0 é domingo, 1 é segunda-feira, etc.

      // Verifica se é fim de semana (sábado ou domingo)
      const isWeekend = currentDay === 0 || currentDay === 6;
      // Verifica se está dentro do horário de funcionamento da empresa
      const isDuringBusinessHours = currentHour >= 8 && currentHour < 18;
      // Verifica se a empresa está online (não é fim de semana e está dentro do horário de funcionamento)
      const isOnline = !isWeekend && isDuringBusinessHours;

      // Define a mensagem de acordo com o status online/offline
      setMessage(isOnline ? "Estamos Online!" : 'Fale Conosco!');
    };

    // Atualiza a mensagem imediatamente ao montar o componente
    updateMessage();
    // Configura um intervalo para atualizar a mensagem a cada minuto
    const intervalId = setInterval(updateMessage, 60000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  // Renderiza a mensagem
  return <h2>{message}</h2>;
};

export default OnlineStatus;
