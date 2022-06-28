import styled from "styled-components";

interface Props {
  bigButton?: boolean;
}

export default styled.button<Props>`
  width: ${(props) => (props.bigButton ? `166px` : `235px`)};
  height: ${(props) => (props.bigButton ? `76px` : `58px`)};
  font-size: ${(props) => (props.bigButton ? `40px` : `42px`)};
  background: #21fff2;
  color: #383d4e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background: #98fff9;
  }

  @media (max-width: 1200px) {
    width: ${(props) => (props.bigButton ? `166px` : `147px`)};
    height: ${(props) => (props.bigButton ? `68px` : `59px`)};
    font-size: ${(props) =>
      props.bigButton ? `25px` : `25px`};
  }
`;
