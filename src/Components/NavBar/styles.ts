import styled from 'styled-components';

export const Container = styled.div`
  width: 330px;
  min-width: 330px;
  height: auto;
  min-height: 100vh;
  overflow-y: auto;
  
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const ComponentBlue = styled.div`
background: #21FFF2;
width: 100%;
height: auto;
min-height: 100vh;
border-radius: 0px 3px 3px 0px;
`;

export const ComponentWhite = styled.div`
background:#FEFEFE ;
color: #000;
width: 95%;
height: auto;
min-height: 100vh;
display: flex;
justify-content: center;
`;

export const LapInfo = styled.div`
display: flex;
justify-content: center;
`;