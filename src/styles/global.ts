import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
button{
  font-family: inherit;
  font-weight: inherit;
  padding: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

input,
textarea {
  font-family:inherit;
  font-size: inherit;
  background-color: transparent;
  outline: none;
  ::placeholder{
    font-family:inherit;
    font-size: inherit;
  }
}

  body {
    background-color: #FDF7F2;
    margin: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* font-family: 'Poppins', sans-serif; */
  }
`;
