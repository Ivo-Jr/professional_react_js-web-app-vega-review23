import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  /* height: 100%; */

  padding-top: 100px;
`;

export const PDFViewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 0.15rem;
  padding-left: 2rem;
  padding-bottom: 3rem;

  .page-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  button {
    background-color: #2e2e2e;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.15em;
    cursor: pointer;
    margin: 0 0.5rem;

    &:hover {
      background-color: #454545;
    }

    &:disabled {
      background-color: #888;
      cursor: not-allowed;
    }
  }

  p {
    color: var(--color-gray);
    font-weight: regular;
    font-size: 1.15em;
    text-decoration: none;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
  }
`;
