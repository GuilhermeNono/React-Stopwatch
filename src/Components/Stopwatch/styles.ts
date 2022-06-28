import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
width: 406px;
height: 406px;
border: 8px solid #21FFF2;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 1200px) {
  width: calc(406px/1.2);
height: calc(406px/1.2);
}
`;

export const Time = styled.span`
font-size: 48px;
color: #FEFEFE;

@media (max-width: 1200px) {
  font-size: calc(48px/1.4);
}
`