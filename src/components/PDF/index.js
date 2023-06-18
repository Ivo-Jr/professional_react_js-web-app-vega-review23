import React from 'react';
import { createGlobalStyle } from 'styled-components';
import html2pdf from 'html2pdf.js';
import * as S from './styles';

const GlobalStyle = createGlobalStyle`
  .no-export {
    display: none !important;
  }
`;

const formatDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}_${hours}-${minutes}`;
};

const PDF = ({ selector, projectName }) => {
  const exportPDF = () => {
    const element = document.querySelector(selector || '#content-to-export');
    const pageTitle = document.title;
    const dateTime = formatDate();
    const options = {
      margin: [0, 0, 0, 0],
      filename: `${projectName ? projectName + '_' : ''}${pageTitle}_${dateTime}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      onclone: (clonedElement) => {
        const buttonElement = clonedElement.querySelector('.pdf-button');
        buttonElement.classList.add('no-export');
      },
    };

    html2pdf()
      .set(options)
      .from(element)
      .save();
  };

  return (
    <>
      <S.Button>
        <GlobalStyle />
        <button className="pdf-button" onClick={exportPDF}>
          Converter para PDF
        </button>
      </S.Button>
    </>
  );
};

export default PDF;
