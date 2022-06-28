import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;900&display=swap');

*{
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html, body{
    height: 100%;
    width: 100%;
    background-color: #383D4E;   
    overflow: hidden;
}

.App {
    height: 100% ;
    width: 100% ;
    display: flex;
    flex-direction: row;
    max-width: 100vw;
    max-height: 100vh;
}
`;