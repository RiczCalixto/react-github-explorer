import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box
  }

  body{
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    ${tw`font-sans text-base`}
  }

  #root {
    ${tw`my-0 mx-auto py-12 px-4 max-w-screen-lg`}
  }

  button{
    cursor: pointer;
  }
`;
