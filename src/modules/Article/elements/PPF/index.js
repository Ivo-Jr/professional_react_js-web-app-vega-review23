import React, { useState, useEffect, useCallback } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import PDF from '../../../../assets/PROTEC - PROJETISTA DE MÁQUINAS.pdf';
import Login from '../../../../components/Login/Login.js'
import * as S from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PPF = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const credentials = {
    client: "PROTEC",
    password: "MAQUINAS",
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextPage = useCallback(() => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }, [pageNumber, numPages]);

  const prevPage = useCallback(() => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }, [pageNumber]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') {
        nextPage();
      } else if (event.key === 'ArrowLeft') {
        prevPage();
      }
    },
    [nextPage, prevPage]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} credentials={credentials} />
      ) : (
        <S.Container>
          <S.PDFViewer>
            <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Página {pageNumber} de {numPages}
            </p>
            <div className="page-navigation">
              <button onClick={prevPage} disabled={pageNumber <= 1}>
                Página anterior
              </button>
              <button onClick={nextPage} disabled={pageNumber >= numPages}>
                Próxima página
              </button>
            </div>
          </S.PDFViewer>
        </S.Container>
      )}
    </>

  );
}
